import * as React from 'react';
import Navigation from '../components/Navigation';
import Head from 'next/head';
import styles from './_app.module.css';
import './css/index.css';
import './global.css';
import 'prismjs/themes/prism.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head key="meta-info">
        <title>AMWAM - Amit Shah</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="manifest.json" />
      </Head>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-9977N7FRG8"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9977N7FRG8');
        `}
      </script>

      <Navigation />
      <div id={styles['content-wrapper']}>
        <main id={styles.content}>
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
