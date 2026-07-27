# Small Wins marketing-site deployment notes

The site code is production-build ready. The lead form still requires the Supabase migration, Edge Function deployment, and secrets below before it will submit successfully.

## What is wired

The workflow inquiry posts to:

`submit-marketing-lead`

The function validates the seven-field inquiry, stores it in `public.marketing_leads`, suppresses rapid duplicate submissions, and sends a notification to `gkmatt29@gmail.com` through Resend when email secrets are configured.

The public form collects:

- Name
- Business name
- Email
- Website (optional)
- Type of custom work
- How requests arrive today
- Biggest workflow frustration

## 1. Create or update the lead table

Open Supabase SQL Editor and run:

`supabase/migrations/202607210001_create_marketing_leads.sql`

The SQL is safe to run if the earlier draft table already exists. It makes the removed legacy fields nullable rather than deleting prior data.

## 2. Configure the marketing site

Create `.env.local` for local testing and configure the same values in the site host:

```bash
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_SUPABASE_PUBLISHABLE_KEY

# Legacy fallback only:
# VITE_SUPABASE_ANON_KEY=YOUR_LEGACY_ANON_KEY
```

Use only the public publishable/anon key in Vite. Never place a secret or service-role key in a browser environment variable.

## 3. Link the Supabase project from Git Bash

```bash
npx supabase login
npx supabase link --project-ref wcfbijdptpiwbdmllyyj
```

## 4. Deploy the public Edge Function

```bash
npx supabase functions deploy submit-marketing-lead \
  --project-ref wcfbijdptpiwbdmllyyj \
  --no-verify-jwt
```

The included `supabase/config.toml` also sets `verify_jwt = false`. The browser sends the public key through the `apikey` header; validation, spam controls, and privileged database writes happen inside the function.

## 5. Set Edge Function secrets

First inspect existing secrets:

```bash
npx supabase secrets list --project-ref wcfbijdptpiwbdmllyyj
```

Then set or update:

```bash
npx supabase secrets set \
  LEAD_NOTIFICATION_EMAIL="gkmatt29@gmail.com" \
  LEAD_FROM_EMAIL="Small Wins <YOUR_VERIFIED_SENDER@smallwins.ai>" \
  ALLOWED_ORIGINS="https://smallwins.ai,https://www.smallwins.ai,http://localhost:5173,http://localhost:8080" \
  --project-ref wcfbijdptpiwbdmllyyj
```

Set `RESEND_API_KEY` only if it is not already present:

```bash
npx supabase secrets set \
  RESEND_API_KEY="YOUR_RESEND_API_KEY" \
  --project-ref wcfbijdptpiwbdmllyyj
```

`LEAD_FROM_EMAIL` must use a sender/domain verified in Resend. If a preview deployment uses another origin, add that exact origin to `ALLOWED_ORIGINS` before testing.

## 6. Build and preview locally

Node 22 LTS is recommended.

```bash
npm ci
npm run build
npm run dev
```

## 7. Test the lead flow

1. Submit a realistic inquiry from localhost.
2. Confirm the success message appears.
3. Confirm one row appears in `public.marketing_leads`.
4. Confirm the notification reaches `gkmatt29@gmail.com`.
5. Confirm Reply-To uses the submitted prospect email.
6. Submit the same email again within two minutes and confirm no duplicate row is created.
7. Test required fields and an invalid email.
8. Test from the deployment preview after adding its exact origin.
9. Review Supabase Edge Function logs if the browser reports a fetch or CORS error.

## Manual items not verified from this package

- Execution of the hosted SQL migration
- Live Supabase project linkage
- Edge Function deployment
- Resend sender-domain verification
- Delivery of a real notification email
- Final preview or production deployment to `smallwins.ai`
