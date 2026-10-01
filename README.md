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

## Deploying to Cloudflare

The repo is configured for Cloudflare Workers (`wrangler.jsonc` + `open-next.config.ts`), so no extra setup is needed:

1. Push this repository to GitHub
2. In the Cloudflare dashboard, go to **Compute (Workers & Pages) → Create → Workers → Connect to Git** and pick the repository
3. Confirm the build settings (they also come from `wrangler.jsonc`):
   - **Build command:** `npx prisma generate && npx opennextjs-cloudflare build`
   - **Deploy command:** `npx wrangler deploy`
4. Deploy — the site goes live at `https://woodora-kitchens.<your-subdomain>.workers.dev`

Every push to the connected branch rebuilds and redeploys automatically.

### A note on the contact form

In local development, enquiries are stored in a SQLite database (`db/custom.db`). Cloudflare Workers have no persistent disk, so on the live site the form still accepts submissions normally and each enquiry is written to the Worker logs (open your Worker in the Cloudflare dashboard → **Logs**). If you want enquiries stored permanently on the live site, a Cloudflare D1 database can be wired in with Prisma's D1 driver adapter — ask and it can be added.
