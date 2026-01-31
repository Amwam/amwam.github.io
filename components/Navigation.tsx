import * as React from 'react';
import Link from 'next/link';
import styles from './styles/Navigation.module.css';

export default function Navigation() {
  return (
    <nav id={styles['nav-bar']} role="navigation" aria-label="Main navigation">
      <img
        id={styles['nav-display-picture']}
        src="/images/me.200.png"
        alt="Amit Shah profile picture"
        loading="lazy"
      />

      <div id={styles.name} aria-label="Site owner">Amit Shah</div>
      <div id={styles['nav-links']}>
        <div className={styles['nav-link']}>
          <Link href="/" aria-label="Navigate to home page">Home</Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/about" aria-label="Navigate to about page">About</Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/blog" aria-label="Navigate to blog">Blog</Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/contact" aria-label="Navigate to contact page">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
