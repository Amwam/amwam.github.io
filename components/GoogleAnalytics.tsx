import React from 'react';
import Script from 'next/script';

export const GoogleAnalytics = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-9977N7FRG8`}
      />

      <Script id="" strategy="lazyOnload">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9977N7FRG8', {
              page_path: window.location.pathname,
              });
          `}
      </Script>
    </>
  );
};
