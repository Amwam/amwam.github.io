import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import posts from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import styles from './style.module.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';

interface IBlogPostProps {
  POST: string;
}

function BlogPost(props: IBlogPostProps) {
  const router = useRouter();

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const slug = router?.query?.slug;
  const post = posts.reduce((x, p) => {
    if (p.slug === slug) {
      return p;
    }
    return x;
  });

  const input = props.POST;

  if (!slug || !input) {
    return <div>Post not found.</div>;
  }
  return (
    <div>
      <Head>
        <title key="title">{`${post.title} | AMWAM - Amit Shah`}</title>
        <meta property="og:url" content={`https://amwam.me/blog/${slug}`} />
        <meta property="og:type" content="article" key="og-type" />
        <meta
          property="og:title"
          content={`${post.title} | AMWAM - Amit Shah`}
          key="ogtitle"
        />
        <meta property="og:image" content="https://amwam.me/images/me.png" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content="Amit Shah" />
      </Head>
      <h1>{post.title}</h1>
      <h4>
        {new Date(post.date).toLocaleDateString('en-GB', { dateStyle: 'long' })}
      </h4>

      <div className={styles.tags}>
        {(post.tags || []).map((tag, index) => (
          <span key={tag}>
            <BlogPostTag tag={tag} />
            {index != post.tags?.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>

      <ReactMarkdown skipHtml={true}>{input}</ReactMarkdown>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

// Here we're fetching the markdown files to use a posts
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const { getPostContent } = await import('../../utils/getPostContent');
  const result = getPostContent(slug);

  if (!result) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      POST: result.content,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: posts
      .filter((p) => p.slug)
      .map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export default dynamic(() => Promise.resolve(BlogPost), { ssr: false });
