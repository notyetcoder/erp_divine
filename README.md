# Divine ERP Solutions: Website

One-page marketing site built with Next.js (App Router), Tailwind CSS and Supabase.
Deploys to Vercel.

## 1. Run it locally

```bash
npm install
cp .env.example .env.local   # then fill in the values (see step 3)
npm run dev
```

Open http://localhost:3000

## 2. Set up Supabase (stores contact form submissions)

1. Create a free project at https://supabase.com.
2. Open **SQL Editor -> New query**, paste the contents of `supabase/schema.sql`, and click **Run**.
   This creates the `contact_submissions` table and allows the website to insert rows only.
3. Open **Project Settings -> API** and copy:
   - **Project URL**
   - **anon public** key

## 3. Environment variables

| Variable | What it is |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon public key |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Country code + number, digits only. Example: `919876543210` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email address shown on the site |

Put them in `.env.local` for local work, and in Vercel (step 5) for production.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Divine ERP Solutions website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/divine-erp-solutions.git
git push -u origin main
```

`.env.local` is git-ignored, so your keys will not be uploaded.

## 5. Deploy on Vercel

1. Go to https://vercel.com/new and import your GitHub repository.
2. Framework preset is detected automatically as **Next.js**.
3. Under **Environment Variables**, add the four variables from step 3.
4. Click **Deploy**.

After deploying, submit the form once and check **Supabase -> Table Editor -> contact_submissions**.

## Editing content

- Business name, tagline, links, WhatsApp and email: `src/lib/site.ts`
- Each page section is a file in `src/components/`
- Colours: `tailwind.config.ts`

## Project structure

```
src/
  app/
    api/contact/route.ts   Validates the form and saves it to Supabase
    layout.tsx, page.tsx, globals.css
  components/              Navbar, Hero, WhatWeDo, Services, Approach, WhyUs, Contact, Footer
  lib/                     site.ts (content settings), supabase.ts (server client)
supabase/schema.sql        Table + security policy
```

## Notes

- The form includes a hidden spam-trap field and server-side validation.
- Row Level Security means the public key can only add submissions, never read them.
- To get an email alert for each new lead, add a Supabase Database Webhook or an
  Edge Function on `contact_submissions`.
