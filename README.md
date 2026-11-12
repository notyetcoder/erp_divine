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
| `RESEND_API_KEY` | Key from resend.com. Turns on email alerts for new enquiries |
| `CONTACT_NOTIFY_EMAIL` | Where enquiry alerts are delivered |
| `CONTACT_FROM_EMAIL` | Optional. Sender address once you verify your own domain in Resend |

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
- Each enquiry is saved to Supabase first, then emailed to `CONTACT_NOTIFY_EMAIL`. Replying to
  that email goes straight to the customer. If the email step fails, the enquiry is still saved.
- Resend's free test sender only delivers to the address you signed up with. Verify your own
  domain in Resend for reliable delivery to any inbox.

## Photos

The site shows no photos until you add some. Put image files in `public/images/`, then fill in the
three slots in `src/lib/images.ts` (story, approach, contact). Each slot needs the file path and a
plain, honest description. Free sources whose licences allow commercial use without credit include
Unsplash, Pexels and Pixabay. Read the licence on the page of each photo you download.

## Editing the content

- Services, industries, process phases, engagement options, FAQ and the trust badges all live in
  `src/lib/content.ts`, in plain text. Edit the text there. Only list what you can really do today.
- Case studies and the team section are placeholders and stay hidden on the live site. To preview
  them, set `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` in a Vercel Preview environment.
- Optional photos: `src/lib/images.ts`.
- Analytics: `src/lib/analytics.ts` is a placeholder hook. Add your analytics script and the
  "cta_click" and "form_submit" events flow through.
- Fonts come from npm (`@fontsource-variable/*`), so builds do not depend on Google Fonts.

## Site structure

The site is data-driven. Edit text in `src/lib`, and the pages, menus, search and sitemap update automatically.

| File | What it holds |
| --- | --- |
| `src/lib/modules.ts` | The 13 ERPNext modules and their features |
| `src/lib/erpnext.ts` | How each feature works, industries, India compliance, comparisons, get-started steps |
| `src/lib/apps.ts` | Other Frappe apps (HR, CRM, Helpdesk, Insights, Builder, Learning, Framework, Cloud) |
| `src/lib/pages.ts` | Services, process phases, guides, glossary, checklists |
| `src/lib/links.ts` | Official links, including the Frappe Cloud free-trial and login links |
| `src/lib/videos.ts` | Official YouTube videos. Empty until you add verified ones |

Routes: `/products` (hub), `/products/erpnext/...` (modules, features, industries, India, compare, cost,
trial, get started, videos), `/products/[app]` (other apps), `/demo`, `/services/[slug]`,
`/process/[phase]`, `/resources/...`, `/search`, `/about`, `/contact`, `/legal`.
Old `/modules/...` URLs redirect to the new ones.

### Rules for adding content
- Write in your own words. Do not copy text from other sites.
- Check facts against the official documentation before you write them.
- Add a video only if it is an official public video, and add only its YouTube ID.
- Never add client names, numbers, awards or partner claims that are not yours.
- Every sign-in and sign-up button goes to Frappe Cloud and is labelled as theirs.
