import * as React from "react";
import Navigation from "./components/Navigation";
import Head from "next/head";
import styles from "./_app.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="stylesheet" href="https://fonts.xz.style/serve/inter.css" />
        <link rel="stylesheet" href="/css/index.css"></link>
      </Head>
      <Head key="prism">
        <link
          href="https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.20.0/prism.min.js"></script>
        <script
          src="
https://cdn.jsdelivr.net/npm/prismjs@1.20.0/plugins/autoloader/prism-autoloader.min.js
"
        ></script>
      </Head>
      <Navigation />
      <main id={styles.content}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
