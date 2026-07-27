# Small Wins marketing-site test checklist

## Approved messaging
- [ ] Hero says “Turn custom requests into organized, trackable orders.”
- [ ] Industry copy prioritizes apparel, embroidery, screen printing, awards, and promotional products.
- [ ] Three-step implementation process is Understand, Configure, Launch.
- [ ] “AI-assisted. Human-led.” appears in the implementation section.
- [ ] Founder copy uses Matthew and contains no Adobe or Vanguard references.
- [ ] Public pricing is $2,500+ implementation and $299+/month only.
- [ ] FAQ contains exactly six questions.
- [ ] No “one core order process,” “open-ended engagement,” “phone-sized screen,” or alarming security disclaimer remains.

## Visual and responsive
- [ ] Header and mobile menu work at 375px, 768px, 1024px, and 1440px.
- [ ] Hero screenshots do not overlap text.
- [ ] All product screenshots open in the larger dialog view.
- [ ] The latest mobile Hub screenshot contains no C&M branding.
- [ ] Product images remain readable and do not create horizontal scrolling.
- [ ] Pricing cards stack as Implementation, Ongoing service, Additional projects.
- [ ] Lead-form labels and error messages remain visible on mobile.
- [ ] Reduced-motion mode disables decorative movement.

## Links
- [ ] Demo links open `https://cm.smallwins.ai`.
- [ ] Client login opens `https://admin.smallwins.ai`.
- [ ] LinkedIn opens Matthew’s provided profile.
- [ ] Footer email opens `gkmatt29@gmail.com`.
- [ ] Privacy route loads directly at `/privacy`.
- [ ] Navigation anchor links land below the fixed header.

## Lead form UI
- [ ] Form contains Name, Business name, Email, Website, Type of custom work, How requests arrive today, and Biggest workflow frustration.
- [ ] Monthly volume and Anything else are absent.
- [ ] Website remains optional and accepts a simple domain entry.
- [ ] Required fields prevent incomplete submission.
- [ ] Invalid email is rejected.
- [ ] Missing environment configuration shows a useful fallback message.
- [ ] Success state says Matthew will review the workflow and follow up personally.

## Lead form backend
- [ ] SQL migration has been run.
- [ ] Site host has `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` (or legacy anon fallback).
- [ ] `submit-marketing-lead` is deployed with JWT verification disabled.
- [ ] Exact localhost, preview, and production origins are included in `ALLOWED_ORIGINS`.
- [ ] Successful submission creates one `marketing_leads` row.
- [ ] Resend notification arrives at `gkmatt29@gmail.com`.
- [ ] Reply-To uses the prospect email.
- [ ] Rapid duplicate submission does not create duplicate rows.

## Build and metadata
- [ ] `npm ci` succeeds under Node 22 LTS.
- [ ] `npm run build` succeeds.
- [ ] `npm run lint` has no errors.
- [ ] `package-lock.json` contains no internal registry URLs.
- [ ] Favicon displays in the browser tab.
- [ ] Apple touch icon and web manifest resolve.
- [ ] Open Graph image resolves at `/og-small-wins.png`.
- [ ] Page title and description reflect the new positioning.
- [ ] Open Graph and Twitter tags are present in raw HTML.
- [ ] `npm audit --omit=dev` reports zero production dependency vulnerabilities.
