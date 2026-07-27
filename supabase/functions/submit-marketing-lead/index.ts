const jsonHeaders = { "Content-Type": "application/json" };

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const clean = (value: unknown, maxLength: number) =>
  typeof value === "string" ? value.trim().slice(0, maxLength) : "";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getCorsHeaders = (request: Request) => {
  const origin = request.headers.get("origin") ?? "";
  const configured = (Deno.env.get("ALLOWED_ORIGINS") ?? "https://smallwins.ai,https://www.smallwins.ai,http://localhost:5173,http://localhost:8080")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  const allowedOrigin = configured.includes(origin) ? origin : configured[0];

  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
};

Deno.serve(async (request) => {
  const corsHeaders = getCorsHeaders(request);

  if (request.method === "OPTIONS") {
    return new Response("ok", { status: 200, headers: corsHeaders });
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed." }), {
      status: 405,
      headers: { ...jsonHeaders, ...corsHeaders },
    });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
    return new Response(JSON.stringify({ error: "The inquiry service is not configured." }), {
      status: 500,
      headers: { ...jsonHeaders, ...corsHeaders },
    });
  }

  try {
    const payload = await request.json();

    // Honeypot: return success so basic bots do not learn how to bypass it.
    if (clean(payload.companyFax, 200)) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...jsonHeaders, ...corsHeaders },
      });
    }

    const lead = {
      name: clean(payload.name, 120),
      business_name: clean(payload.businessName, 160),
      email: clean(payload.email, 254).toLowerCase(),
      website: clean(payload.website, 500) || null,
      work_type: clean(payload.workType, 160),
      intake_channels: clean(payload.intakeChannels, 160),
      biggest_frustration: clean(payload.biggestFrustration, 3000),
      source_url: clean(payload.sourceUrl, 1000) || null,
      referrer: clean(payload.referrer, 1000) || null,
      utm_source: clean(payload.utmSource, 200) || null,
      utm_medium: clean(payload.utmMedium, 200) || null,
      utm_campaign: clean(payload.utmCampaign, 300) || null,
      utm_content: clean(payload.utmContent, 300) || null,
      utm_term: clean(payload.utmTerm, 300) || null,
      user_agent: clean(request.headers.get("user-agent"), 1000) || null,
    };

    const missing = [
      lead.name,
      lead.business_name,
      lead.email,
      lead.work_type,
      lead.intake_channels,
      lead.biggest_frustration,
    ].some((value) => !value);

    if (missing || !isEmail(lead.email)) {
      return new Response(JSON.stringify({ error: "Please complete all required fields with a valid email address." }), {
        status: 400,
        headers: { ...jsonHeaders, ...corsHeaders },
      });
    }

    // Avoid accidental rapid duplicates from the same email address.
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000).toISOString();
    const duplicateUrl = `${supabaseUrl}/rest/v1/marketing_leads?select=id&email=eq.${encodeURIComponent(lead.email)}&created_at=gte.${encodeURIComponent(twoMinutesAgo)}&limit=1`;
    const duplicateResponse = await fetch(duplicateUrl, {
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
    });

    if (duplicateResponse.ok) {
      const duplicates = await duplicateResponse.json();
      if (Array.isArray(duplicates) && duplicates.length > 0) {
        return new Response(JSON.stringify({ ok: true, duplicate: true }), {
          status: 200,
          headers: { ...jsonHeaders, ...corsHeaders },
        });
      }
    }

    const insertResponse = await fetch(`${supabaseUrl}/rest/v1/marketing_leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Prefer: "return=representation",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      body: JSON.stringify(lead),
    });

    if (!insertResponse.ok) {
      const detail = await insertResponse.text();
      console.error("Lead insert failed:", detail);
      throw new Error("Lead storage failed.");
    }

    const [storedLead] = await insertResponse.json();
    let emailNotificationSent = false;

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const notificationEmail = Deno.env.get("LEAD_NOTIFICATION_EMAIL") ?? "gkmatt29@gmail.com";
    const fromEmail = Deno.env.get("LEAD_FROM_EMAIL");

    if (resendApiKey && fromEmail) {
      const rows = [
        ["Name", lead.name],
        ["Business", lead.business_name],
        ["Email", lead.email],
        ["Website", lead.website ?? "—"],
        ["Type of work", lead.work_type],
        ["Current intake", lead.intake_channels],
        ["Biggest frustration", lead.biggest_frustration],
        ["UTM source", lead.utm_source ?? "—"],
        ["UTM campaign", lead.utm_campaign ?? "—"],
      ];

      const htmlRows = rows
        .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:700;vertical-align:top;border-bottom:1px solid #e8edf0;">${escapeHtml(label)}</td><td style="padding:8px 12px;white-space:pre-wrap;border-bottom:1px solid #e8edf0;">${escapeHtml(value)}</td></tr>`)
        .join("");

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notificationEmail],
          reply_to: lead.email,
          subject: `Small Wins inquiry — ${lead.business_name}`,
          html: `<div style="font-family:Arial,sans-serif;color:#0d2b3d;max-width:720px;margin:0 auto;"><h1 style="font-size:24px;">New Small Wins workflow inquiry</h1><p>A prospect submitted the marketing-site form.</p><table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table><p style="margin-top:20px;color:#617784;font-size:12px;">Source: ${escapeHtml(lead.source_url ?? "Unknown")}</p></div>`,
        }),
      });

      if (emailResponse.ok) {
        emailNotificationSent = true;
        await fetch(`${supabaseUrl}/rest/v1/marketing_leads?id=eq.${storedLead.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            apikey: serviceRoleKey,
            Authorization: `Bearer ${serviceRoleKey}`,
          },
          body: JSON.stringify({ email_notification_sent: true }),
        });
      } else {
        console.error("Lead notification email failed:", await emailResponse.text());
      }
    } else {
      console.warn("Lead stored, but RESEND_API_KEY or LEAD_FROM_EMAIL is missing; no notification email sent.");
    }

    return new Response(JSON.stringify({ ok: true, emailNotificationSent }), {
      status: 200,
      headers: { ...jsonHeaders, ...corsHeaders },
    });
  } catch (error) {
    console.error("submit-marketing-lead error:", error);
    return new Response(JSON.stringify({ error: "Your inquiry could not be submitted. Please try again or email Matthew directly." }), {
      status: 500,
      headers: { ...jsonHeaders, ...corsHeaders },
    });
  }
});
