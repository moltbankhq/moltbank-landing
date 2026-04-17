/**
 * Post-build script that generates per-route HTML files with correct <head> tags.
 *
 * Social crawlers (Twitter, Slack, LinkedIn) don't execute JavaScript, so they
 * read meta tags from the raw HTML. Without this step every route returns the
 * homepage's index.html and its OG tags — which means sharing /privacy on Slack
 * shows "Moltbank — The Bank for your Agent Fleet" instead of
 * "Privacy Policy — Moltbank".
 *
 * This script reads the built dist/index.html, swaps the <head> metadata for
 * each route, and writes dist/<route>/index.html. Vercel serves filesystem
 * matches before rewrites, so these files take priority over the SPA catch-all.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

// Derive SITE_URL from src/config/site.ts (single source of truth) so
// the domain is never duplicated across script and source.
const siteTs = readFileSync(join(__dirname, '..', 'src', 'config', 'site.ts'), 'utf-8');
const siteUrlMatch = siteTs.match(/SITE_URL\s*=\s*'([^']+)'/);
if (!siteUrlMatch) throw new Error('Could not read SITE_URL from src/config/site.ts');
const SITE_URL = siteUrlMatch[1];

const routes = [
  {
    path: 'privacy',
    title: 'Privacy Policy — Moltbank',
    description:
      'Moltbank Privacy Policy describing how we collect, use, and protect your information.',
    ogType: 'article',
    dateModified: '2026-03-27',
    breadcrumbName: 'Privacy Policy',
  },
  {
    path: 'terms',
    title: 'Terms of Service — Moltbank',
    description:
      'Moltbank Terms of Service governing access to and use of the Moltbank services.',
    ogType: 'article',
    dateModified: '2026-03-27',
    breadcrumbName: 'Terms of Service',
  },
];

for (const route of routes) {
  const url = `${SITE_URL}/${route.path}`;
  let html = baseHtml;

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${route.title}</title>`);

  // <meta name="description">
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${route.description}" />`,
  );

  // <link rel="canonical"> + hreflang alternates
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${url}" />`,
  );
  html = html.replaceAll(
    /<link rel="alternate" hreflang="[^"]*" href="[^"]*" \/>/g,
    '', // remove homepage hreflang; re-add route-specific ones below
  );
  html = html.replace(
    `<link rel="canonical" href="${url}" />`,
    `<link rel="canonical" href="${url}" />\n    <link rel="alternate" hreflang="en" href="${url}" />\n    <link rel="alternate" hreflang="x-default" href="${url}" />`,
  );

  // Open Graph
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${route.ogType}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${url}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${route.title}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${route.description}" />`,
  );

  // Twitter
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*" \/>/,
    `<meta name="twitter:title" content="${route.title}" />`,
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*" \/>/,
    `<meta name="twitter:description" content="${route.description}" />`,
  );

  // Inject per-route structured data (WebPage + BreadcrumbList) before </head>.
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: route.title,
        url,
        description: route.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        dateModified: route.dateModified,
        inLanguage: 'en',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: route.breadcrumbName },
        ],
      },
    ],
  });
  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${jsonLd}</script>\n  </head>`,
  );

  // Write dist/<route>/index.html
  const outDir = join(distDir, route.path);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'index.html'), html);

  console.log(`  ✓ /${route.path}/index.html`);
}

console.log('Route prerender complete.');
