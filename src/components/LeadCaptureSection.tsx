import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Loader2, Mail, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SALES_EMAIL } from "@/lib/constants";

type LeadForm = {
  name: string;
  businessName: string;
  email: string;
  website: string;
  workType: string;
  intakeChannels: string;
  biggestFrustration: string;
  companyFax: string;
};

const initialForm: LeadForm = {
  name: "",
  businessName: "",
  email: "",
  website: "",
  workType: "",
  intakeChannels: "",
  biggestFrustration: "",
  companyFax: "",
};

const LeadCaptureSection = () => {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const update = (field: keyof LeadForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, "");
    const publishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !publishableKey) {
      setStatus("error");
      setError(`The inquiry form is not connected yet. Email ${SALES_EMAIL} and I’ll reply personally.`);
      return;
    }

    setStatus("submitting");

    try {
      const searchParams = new URLSearchParams(window.location.search);
      const response = await fetch(`${supabaseUrl}/functions/v1/submit-marketing-lead`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: publishableKey,
        },
        body: JSON.stringify({
          ...form,
          sourceUrl: window.location.href,
          referrer: document.referrer || null,
          utmSource: searchParams.get("utm_source"),
          utmMedium: searchParams.get("utm_medium"),
          utmCampaign: searchParams.get("utm_campaign"),
          utmContent: searchParams.get("utm_content"),
          utmTerm: searchParams.get("utm_term"),
          submittedAt: new Date().toISOString(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Your inquiry could not be submitted.");
      }

      setStatus("success");
      setForm(initialForm);
      window.dispatchEvent(new CustomEvent("smallwins:lead-submitted", { detail: { source: "marketing-site" } }));
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Your inquiry could not be submitted. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-foreground py-20 text-background sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <div className="max-w-xl lg:sticky lg:top-28">
              <span className="inline-flex rounded-full border border-background/20 bg-background/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-background/85">
                Tell me how orders arrive today
              </span>
              <h2 className="mt-6 font-display text-4xl font-bold text-background sm:text-5xl">Ready for fewer follow-ups?</h2>
              <p className="mt-5 text-lg leading-relaxed text-background/70">
                Share a little about your current workflow. I’ll review it personally and follow up with an honest recommendation.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "A short, structured inquiry—not a sales maze.",
                  "No phone number required.",
                  "Clear next steps after I review your workflow.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-background/75">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 rounded-2xl border border-background/15 bg-background/5 p-5">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm leading-relaxed text-background/65">
                    Your information is used only to review and respond to your Small Wins inquiry. Prefer email? Reach Matthew at{" "}
                    <a className="font-semibold text-background underline underline-offset-4" href={`mailto:${SALES_EMAIL}`}>
                      {SALES_EMAIL}
                    </a>.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-[2rem] bg-background p-6 text-foreground shadow-2xl sm:p-8 lg:p-10">
              {status === "success" ? (
                <div id="lead-form-success" className="flex min-h-[500px] flex-col items-center justify-center text-center" role="status" aria-live="polite">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold">Thanks—your request is in.</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">
                    I’ll review your workflow and follow up personally.
                  </p>
                  <Button className="mt-8" variant="outline" onClick={() => setStatus("idle")}>
                    Submit another inquiry
                  </Button>
                </div>
              ) : (
                <form id="workflow-inquiry-form" onSubmit={handleSubmit}>
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <span className="section-kicker">Workflow inquiry</span>
                      <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">Start with the basics.</h3>
                    </div>
                    <div className="hidden h-11 w-11 items-center justify-center rounded-xl bg-accent/25 text-primary sm:flex">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    <label className="form-field">
                      <span>Name *</span>
                      <input required autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                    </label>
                    <label className="form-field">
                      <span>Business name *</span>
                      <input required autoComplete="organization" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} />
                    </label>
                    <label className="form-field">
                      <span>Email *</span>
                      <input required type="email" autoComplete="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
                    </label>
                    <label className="form-field">
                      <span>Website <small>optional</small></span>
                      <input type="text" inputMode="url" placeholder="yourbusiness.com" autoComplete="url" value={form.website} onChange={(e) => update("website", e.target.value)} />
                    </label>
                    <label className="form-field">
                      <span>Type of custom work *</span>
                      <select required value={form.workType} onChange={(e) => update("workType", e.target.value)}>
                        <option value="">Choose one</option>
                        <option>Apparel, embroidery, or screen printing</option>
                        <option>Trophies, awards, or engraving</option>
                        <option>Promotional products or signs</option>
                        <option>Related custom-order work</option>
                        <option>Something else</option>
                      </select>
                    </label>
                    <label className="form-field">
                      <span>How requests arrive today *</span>
                      <select required value={form.intakeChannels} onChange={(e) => update("intakeChannels", e.target.value)}>
                        <option value="">Choose the closest match</option>
                        <option>Email</option>
                        <option>Phone or text</option>
                        <option>Website form</option>
                        <option>Paper form or in person</option>
                        <option>A mix of several channels</option>
                      </select>
                    </label>
                    <label className="form-field sm:col-span-2">
                      <span>Biggest workflow frustration *</span>
                      <textarea required rows={5} placeholder="What keeps getting lost, delayed, repeated, or asked about?" value={form.biggestFrustration} onChange={(e) => update("biggestFrustration", e.target.value)} />
                    </label>
                    <label className="hidden" aria-hidden="true">
                      Company fax
                      <input tabIndex={-1} autoComplete="off" value={form.companyFax} onChange={(e) => update("companyFax", e.target.value)} />
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="mt-5 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive" role="alert">
                      {error} You can also email{" "}
                      <a href={`mailto:${SALES_EMAIL}`} className="font-semibold underline underline-offset-4">{SALES_EMAIL}</a>.
                    </div>
                  )}

                  <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      By submitting, you agree that Matthew may contact you about this inquiry. See the <a href="/privacy" className="font-medium text-primary underline underline-offset-4">privacy notice</a>.
                    </p>
                    <Button type="submit" size="lg" disabled={status === "submitting"} className="shrink-0">
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default LeadCaptureSection;
