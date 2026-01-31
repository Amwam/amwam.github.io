import * as React from 'react';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation';
import styles from './_app.module.css';
import './css/index.css';
import './global.css';
import 'prismjs/themes/prism.css';
import { GoogleAnalytics } from '../components/GoogleAnalytics';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <a href="#main-content" className={styles['skip-link']}>
        Skip to main content
      </a>
      <Navigation />
      <div id={styles['content-wrapper']}>
        <main id="main-content" className={styles.content}>
          <Component {...pageProps} />
        </main>
      </div>
      <GoogleAnalytics />
    </div>
  );
}
