-- This .com site writes into the shared Five Oaks leads table used by
-- fiveoaksoakvillehomes.ca. Rows from this site are tagged:
--   website_source = 'fiveoaksoakvillehomes.com'
--
-- If the table does not exist yet, run the .ca migration first, then this.

alter table five_oaks_oakville_homes_ca_leads
  add column if not exists website_source text;

alter table five_oaks_oakville_homes_ca_leads
  alter column website_source set default 'fiveoaksoakvillehomes.ca';
