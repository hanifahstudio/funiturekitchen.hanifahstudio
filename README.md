# Woodora Kitchens

Marketing website for Woodora Kitchens, a modular kitchen studio. Built with Next.js, TypeScript and Tailwind CSS.

## Pages

- **Home** — hero slider, studio intro, services accordion, project gallery, counters, testimonials, work process and latest news
- **About** — studio story, vision and team
- **Services** — full list of kitchen and interior services
- **Projects** — gallery of completed kitchens
- **News** — journal with pagination
- **Contact** — enquiry form with validation

## Tech

- Next.js (App Router) + TypeScript + Tailwind CSS
- Prisma / SQLite for contact enquiries in local development
- All images served locally from `public/images`

## Local development

```bash
npm install
npx prisma generate
npx prisma db push      # creates the local SQLite database
npm run dev             # http://localhost:3000
```

## Deploying to Netlify

The repo includes a `netlify.toml`, so no extra setup is needed:

1. Push this repository to GitHub
2. In Netlify, choose **Add new site → Import an existing project** and pick the repo
3. Deploy — Netlify reads `netlify.toml` and configures the rest automatically

### A note on the contact form

In local development, enquiries are stored in a SQLite database (`db/custom.db`). Netlify functions have no persistent disk, so on the live site the form still accepts submissions normally and each enquiry is written to the Netlify function log (Filtered Function Logs in the Netlify dashboard). If you want enquiries stored permanently on the live site, connect a hosted database (for example Neon or Supabase Postgres) and point `DATABASE_URL` at it.
