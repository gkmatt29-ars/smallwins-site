# Small Wins marketing site

Public marketing site for Small Wins, built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Local development

Node 22 LTS is recommended.

```bash
npm ci
cp .env.example .env.local
npm run dev
```

The marketing lead form requires the public Supabase values documented in `.env.example` and the Edge Function/database setup in `DEPLOYMENT_NOTES.md`.

## Production build

```bash
npm run build
npm run lint
```

## Important project files

- `SMALL_WINS_FINAL_POLISH_BUILD_BRIEF.txt` — authoritative positioning, pricing, copy, and scope decisions
- `DEPLOYMENT_NOTES.md` — Supabase lead-form setup and deployment steps
- `TEST_CHECKLIST.md` — visual, link, metadata, and form checks
- `supabase/migrations/202607210001_create_marketing_leads.sql` — lead table and compatibility update
- `supabase/functions/submit-marketing-lead/index.ts` — secure lead submission and Resend notification
- `reference_screenshots/` — original supplied product screenshots

## Live destinations preserved

- Customer-form demo: `https://cm.smallwins.ai`
- Client login: `https://admin.smallwins.ai`
- Marketing site: `https://smallwins.ai`
