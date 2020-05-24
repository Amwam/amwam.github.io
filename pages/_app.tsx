import * as React from 'react';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import styles from './_app.module.css';
import './css/index.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head key="meta-info">
        <title>AMWAM - Amit Shah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Head key="stylesheets">
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
      </Head>
      <Head key="prism">
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism.css"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <div id={styles['content-wrapper']}>
        <main id={styles.content}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
