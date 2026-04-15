import React from 'react';
import newMoltLogo from "figma:asset/5efd1251d9853e37402b89ddef8137f1359fd96b.png";
import { Helmet } from 'react-helmet-async';

export default function LogoPage() {
  return (
    <>
      <Helmet>
        <title>Moltbank Logo</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="flex items-center justify-center min-h-screen bg-black">
        <img src={newMoltLogo} alt="MoltBank Logo" className="max-w-[90vw] max-h-[90vh] object-contain" />
      </div>
    </>
  );
}
