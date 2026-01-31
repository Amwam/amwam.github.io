import * as React from 'react';
import ContactIcon from '../components/ContactIcon';
import SEO from '../components/SEO';

const contacts = [
  {
    href: 'https://github.com/amwam',
    image: 'github.png',
    subtext: 'GitHub',
  },

  {
    href: 'http://uk.linkedin.com/pub/amit-shah/25/184/a84/',
    image: 'linkedin.png',
    subtext: 'LinkedIn',
  },
  {
    href: 'https://stackoverflow.com/users/818739/amit-shah',
    image: 'stackoverflow.png',
    subtext: 'Stack overflow',
  },

  {
    href: 'mailto:amit+website@amwam.me',
    image: 'mail.png',
    subtext: 'Email',
  },
];

export default function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
    >
      <SEO
        title="Contact"
        description="Get in touch with Amit Shah. Connect via GitHub, LinkedIn, Stack Overflow, or email. Open to discussing software engineering, architecture, and technology."
        canonical="https://amwam.me/contact"
      />
      <h1>Contact</h1>
      {contacts.map((c) => (
        <ContactIcon key={c.subtext} {...c} />
      ))}
    </div>
  );
}
