-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  message text
);

-- Lock the table down, then allow the website (anon key) to INSERT only.
-- Nobody using the anon key can read, change or delete submissions.
alter table public.contact_submissions enable row level security;

drop policy if exists "Website can insert submissions" on public.contact_submissions;
create policy "Website can insert submissions"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

-- View your leads any time in: Table Editor -> contact_submissions
