import Head from 'next/head';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  article?: {
    publishedTime?: string;
    author?: string;
  };
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://amwam.me/images/me.png',
  article,
  structuredData,
}: SEOProps) {
  const fullTitle = title.includes('AMWAM')
    ? title
    : `${title} | AMWAM - Amit Shah`;
  const canonicalUrl = canonical || 'https://amwam.me';

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} key="ogtitle" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
      <meta property="og:url" content={canonicalUrl} key="ogurl" />
      <meta property="og:type" content={ogType} key="og-type" />
      <meta property="og:image" content={ogImage} key="ogimage" />
      <meta
        property="og:site_name"
        content="AMWAM - Amit Shah"
        key="ogsitename"
      />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" key="twittercard" />
      <meta name="twitter:title" content={fullTitle} key="twittertitle" />
      <meta
        name="twitter:description"
        content={description}
        key="twitterdescription"
      />
      <meta name="twitter:image" content={ogImage} key="twitterimage" />

      {/* Article Meta Tags */}
      {article?.publishedTime && (
        <meta
          property="article:published_time"
          content={article.publishedTime}
        />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* RSS Feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS"
        href="https://amwam.me/rss.xml"
      />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  );
}
