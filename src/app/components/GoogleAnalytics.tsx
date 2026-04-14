import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Check if script is already added
    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-F01QMEGN0M';
      document.head.appendChild(script);

      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      // We do NOT call config here to avoid double tracking on initial load
      // The useEffect below will handle the initial config call
    }
  }, []);

  useEffect(() => {
    // Send pageview on route change
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-F01QMEGN0M', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}
