-- Small Wins public marketing inquiries.
-- Submissions are written by the submit-marketing-lead Edge Function using the service role.

create extension if not exists pgcrypto;

create table if not exists public.marketing_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  business_name text not null check (char_length(business_name) between 1 and 160),
  email text not null check (char_length(email) between 3 and 254),
  website text,
  work_type text not null,
  intake_channels text not null,
  biggest_frustration text not null check (char_length(biggest_frustration) between 1 and 3000),
  source_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  user_agent text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'not_a_fit', 'closed')),
  email_notification_sent boolean not null default false
);

-- Backward-compatible cleanup if an earlier draft of this migration was already run.
-- These legacy fields are no longer collected. If they exist, keep prior data but remove the NOT NULL requirement.
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'marketing_leads' and column_name = 'monthly_volume'
  ) then
    execute 'alter table public.marketing_leads alter column monthly_volume drop not null';
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'marketing_leads' and column_name = 'additional_details'
  ) then
    execute 'alter table public.marketing_leads alter column additional_details drop not null';
  end if;
end $$;

alter table public.marketing_leads enable row level security;

-- Intentionally no public SELECT/INSERT/UPDATE/DELETE policies.
-- The Edge Function uses SUPABASE_SERVICE_ROLE_KEY and bypasses RLS.

create index if not exists marketing_leads_created_at_idx
  on public.marketing_leads (created_at desc);

create index if not exists marketing_leads_status_idx
  on public.marketing_leads (status, created_at desc);

create index if not exists marketing_leads_email_idx
  on public.marketing_leads (lower(email));

comment on table public.marketing_leads is
  'Sales inquiries submitted through the Small Wins marketing website.';
