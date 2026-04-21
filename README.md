# moltbank-landing

Marketing site for Moltbank, served at [moltbank.bot](https://moltbank.bot). React + Vite single-page app with a post-build step that prerenders per-route HTML so social crawlers and non-JS clients see correct `<head>` metadata.

## Tech stack

- [Vite 6](https://vitejs.dev/) + [React 18](https://react.dev/) + [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [MUI](https://mui.com/), [Motion](https://motion.dev/)
- [react-helmet-async](https://github.com/staylor/react-helmet-async) for runtime `<head>` updates
- [Supabase Edge Functions](supabase/functions/server/) for server-side endpoints
- Deployed to [Vercel](https://vercel.com/) (see [vercel.json](vercel.json))

## Getting started

This repo uses **pnpm** (see [pnpm-lock.yaml](pnpm-lock.yaml)).

```bash
pnpm install
pnpm dev       # start Vite dev server
pnpm build     # vite build + prerender per-route HTML into dist/
```

## Project layout

```
src/
  app/
    App.tsx              # app shell
    routes.ts            # React Router config
    pages/               # route components (Landing, Privacy, Terms, Logo, SocialImage)
    components/          # shared components (Root, GoogleAnalytics, legal/)
    lib/                 # helpers
  config/site.ts         # canonical SITE_URL / SITE_NAME / OG_IMAGE
  styles/                # global styles
  assets/                # imported assets
  main.tsx               # Vite entry

public/                  # static files served as-is (llms.txt, robots.txt, sitemap.xml, og-image.png, favicons)
scripts/
  prerender-routes.mjs   # post-build: writes dist/<route>/index.html with per-route <head>
supabase/functions/server # Supabase edge function (Deno)
guidelines/Guidelines.md  # design guidelines
ATTRIBUTIONS.md           # third-party attributions
index.html                # HTML template + SSR-friendly fallback content for crawlers
vercel.json               # Vercel rewrites + security headers
```

## Routes

Defined in [src/app/routes.ts](src/app/routes.ts):

| Path             | Component                                                     |
| ---------------- | ------------------------------------------------------------- |
| `/`              | [LandingPage](src/app/pages/LandingPage.tsx)                  |
| `/privacy`       | [PrivacyPage](src/app/pages/PrivacyPage.tsx)                  |
| `/terms`         | [TermsPage](src/app/pages/TermsPage.tsx)                      |
| `/logo`          | [LogoPage](src/app/pages/LogoPage.tsx)                        |
| `/social-image`  | [SocialImagePage](src/app/pages/SocialImagePage.tsx)          |

## SEO & prerendering

Social crawlers (Twitter, Slack, LinkedIn) don't execute JavaScript, so they read meta tags from the raw HTML. Without a prerender step every route would return the homepage's `index.html` with homepage OG tags.

[scripts/prerender-routes.mjs](scripts/prerender-routes.mjs) runs after `vite build` and writes `dist/<route>/index.html` with the correct `<title>`, description, canonical URL, OG tags, and JSON-LD for each route. Vercel serves filesystem matches before SPA rewrites, so these files take priority.

**Single source of truth for the domain** is [src/config/site.ts](src/config/site.ts) (`SITE_URL`). The prerender script reads it at build time. Static files that can't import TypeScript hardcode the domain and must be kept in sync if it ever changes:

- [index.html](index.html)
- [public/robots.txt](public/robots.txt)
- [public/sitemap.xml](public/sitemap.xml)
- [public/llms.txt](public/llms.txt) — machine-readable integration guide for AI agents ([llmstxt.org](https://llmstxt.org/) convention)

[index.html](index.html) also contains a semantic HTML fallback inside `#root` (replaced by React on mount) and a `<noscript>` block, so crawlers and AI agents without a JS runtime still get actionable content.

## Deployment

Deployed to Vercel. [vercel.json](vercel.json) configures:

- An SPA catch-all rewrite that excludes `llms.txt`, `robots.txt`, `sitemap.xml`, favicons, the OG image, and `/assets/*`
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- `Cache-Control` for `/assets/*` (immutable, 1 year), `robots.txt` (1 hour), `llms.txt` (5 minutes)

## Links

- Dashboard: [app.moltbank.bot](https://app.moltbank.bot)
- Design guidelines: [guidelines/Guidelines.md](guidelines/Guidelines.md)
- Third-party attributions: [ATTRIBUTIONS.md](ATTRIBUTIONS.md)
- Contact: [ricardo@moltbank.bot](mailto:ricardo@moltbank.bot)
