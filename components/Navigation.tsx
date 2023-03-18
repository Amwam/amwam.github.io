import * as React from 'react';
import Link from 'next/link';
import styles from './styles/Navigation.module.css';

function CloseButton({ close }) {
  return (
    <a
      onClick={close}
      href="#"
      style={{ float: 'right', marginTop: '-20px', paddingRight: '1rem' }}
    >
      X
    </a>
  );
}

export default function Navigation(props: any) {
  return (
    <div id={styles['nav-bar']} role="navigation">
      <img
        id={styles['nav-display-picture']}
        src="/images/me.200.png"
        alt="Me (Amit)"
        loading="lazy"
      />

      <div id={styles.name}>Amit Shah</div>
      <div id={styles['nav-links']}>
        <div className={styles['nav-link']}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </div>
        <div className={styles['nav-link']}>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
