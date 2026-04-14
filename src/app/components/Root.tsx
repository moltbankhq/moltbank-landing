import React from 'react';
import { Outlet } from 'react-router';
import { GoogleAnalytics } from './GoogleAnalytics';

export function Root() {
  return (
    <>
      <GoogleAnalytics />
      <Outlet />
    </>
  );
}
