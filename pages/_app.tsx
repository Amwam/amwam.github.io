import * as React from 'react';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import styles from './_app.module.css';
import './css/index.css';
import './global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head key="meta-info">
        <title>AMWAM - Amit Shah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
