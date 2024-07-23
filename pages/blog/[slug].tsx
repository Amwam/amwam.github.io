import fs from 'fs';
import path from 'path';
import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import posts from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import styles from './style.module.css';
import Head from 'next/head';

interface IBlogPostProps {
  POST: string;
}

export default function BlogPost(props: IBlogPostProps) {
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
        <title>{post.title} | AMWAM - Amit Shah</title>
      </Head>
      <h1>{post.title}</h1>
      <h4>
        {new Date(post.date).toLocaleDateString('gb', { dateStyle: 'long' })}
      </h4>

      <div className={styles.tags}>
        {(post.tags || []).map((tag) => (
          <span key={tag}>
            <BlogPostTag tag={tag} />{' '}
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
  const post = posts.reduce((x, p) => {
    if (p.slug === slug) {
      return p;
    }
    return x;
  });
  const postsFilename = path.join(
    process.cwd(),
    'public/posts',
    `${post.post_number}.md`
  );

  const fileContents = fs.readFileSync(postsFilename, 'utf8');
  const POST = fileContents;
  // By returning { props: POST }, the Blog component
  // will receive `POSTS` as a prop at build time
  return {
    props: {
      POST,
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
