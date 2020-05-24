import * as React from 'react';
import ContactIcon from '../components/ContactIcon';
import Head from 'next/head';

const contacts = [
  {
    href: 'https://twitter.com/amwam',
    image: 'twitter.png',
    subtext: 'Twitter',
  },
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
    href: 'https://careers.stackoverflow.com/amwam',
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
      <Head>
        <title>Contact | AMWAM - Amit Shah</title>
      </Head>
      {contacts.map((c) => (
        <ContactIcon key={c.subtext} {...c} />
      ))}
    </div>
  );
}
