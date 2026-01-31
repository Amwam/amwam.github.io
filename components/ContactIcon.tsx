import * as React from 'react';

export default function ContactIcon({
  href,
  subtext,
}: {
  href: string;
  subtext: string;
}) {
  const isExternal = href.startsWith('http') || href.startsWith('//');
  const rel = isExternal ? 'noopener noreferrer' : undefined;

  return (
    <div className="social" style={{ flex: '1 auto', padding: 10 }}>
      <a
        href={href}
        className="sub-text-social"
        rel={rel}
        aria-label={`Contact via ${subtext}`}
      >
        <div className="sub-text-social">
          <strong>{subtext}</strong>
        </div>
      </a>
    </div>
  );
}
