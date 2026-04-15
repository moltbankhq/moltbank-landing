import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { GoogleAnalytics } from './GoogleAnalytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Root() {
  return (
    <>
      <GoogleAnalytics />
      <ScrollToTop />
      <Outlet />
    </>
  );
}
