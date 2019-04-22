import * as React from 'react';

export default function ContactIcon({
  href,
  subtext,
}: {
  href: string;
  subtext: string;
}) {
  return (
    <div className="social" style={{ flex: '1 auto', padding: 10 }}>
      <a href={href} className="sub-text-social">
        <div className="sub-text-social">
          <strong>{subtext}</strong>
        </div>
      </a>
    </div>
  );
}
