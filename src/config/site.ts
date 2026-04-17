/** Canonical SEO constants for the landing site (moltbank.bot).
 *
 *  Every page component and the post-build prerender script
 *  (scripts/prerender-routes.mjs) should derive URLs from these
 *  values instead of hardcoding the domain.
 *
 *  Static files that can't import TypeScript (index.html, sitemap.xml,
 *  robots.txt) still hardcode the domain — keep them in sync if it changes.
 */

export const SITE_URL = 'https://moltbank.bot';
export const SITE_NAME = 'Moltbank';
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
