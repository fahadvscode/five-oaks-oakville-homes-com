create table if not exists five_oaks_oakville_homes_com_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  home_type_interest text,
  budget_range text,
  buyer_type text,
  timeline text,
  is_broker boolean not null default false,
  casl_consent boolean not null default false,
  consent_timestamp timestamptz,
  consent_page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table five_oaks_oakville_homes_com_leads enable row level security;

create policy "anon can insert five_oaks_oakville_homes_com_leads"
  on five_oaks_oakville_homes_com_leads for insert
  to anon
  with check (true);
