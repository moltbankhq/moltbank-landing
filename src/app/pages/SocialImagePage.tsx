import React from 'react';
import { Helmet } from 'react-helmet-async';
import socialImg from "figma:asset/9611b4d232a9b9467fe5dcb33bddec6e69e92556.png";

export default function SocialImagePage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050101] overflow-hidden">
      <Helmet>
        <title>MoltBank | Social Preview</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <img 
        src={socialImg} 
        alt="MoltBank Social Image" 
        className="max-w-full max-h-screen object-contain"
      />
    </div>
  );
}
