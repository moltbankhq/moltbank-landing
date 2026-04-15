import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const GA_ID = (import.meta.env.VITE_GA_ID as string | undefined) || 'G-F01QMEGN0M';

// Internal utility routes that should not be tracked.
const UNTRACKED_PREFIXES = ['/logo', '/social-image'];

function isUntracked(pathname: string) {
  return UNTRACKED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (!GA_ID) return;
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    // Do NOT call config here — the effect below handles it on route changes.
  }, []);

  useEffect(() => {
    if (!GA_ID) return;
    if (typeof window.gtag !== 'function') return;
    if (isUntracked(location.pathname)) return;

    window.gtag('config', GA_ID, {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}
