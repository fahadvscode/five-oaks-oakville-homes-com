# Five Oaks Oakville Homes

Independent information and priority-registration site for **Five Oaks** by Caivan Communities at 1303 Dundas Street West, Oakville, Ontario.

Live domain: [https://fiveoaksoakvillehomes.com](https://fiveoaksoakvillehomes.com)

This site is not affiliated with or endorsed by Caivan Communities.

## Stack

- Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- Supabase (`five_oaks_oakville_homes_com_leads`)
- Vercel

## Local development

```bash
cp .env.example .env.local
# fill NEXT_PUBLIC_SUPABASE_ANON_KEY
npm install
npm run dev
```

## Environment

| Variable | Notes |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://cfzuypbljirmibmxpabi.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon key for inserts under RLS |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 |
| `NEXT_PUBLIC_GTM_ID` | Optional GTM |
| `NEXT_PUBLIC_META_PIXEL_ID` | Optional Meta Pixel |

## DNS (GoDaddy)

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | `76.76.21.21` | 600 |
| CNAME | www | `cname.vercel-dns.com` | 600 |
