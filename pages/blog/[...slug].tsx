import fs from 'fs';
import path from 'path';

import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import posts from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import styles from './style.module.css';

function CodeBlock(props: { language: string; value: string }) {
  const language = props.language || 'javascript';

  const html = Prism.highlight(
    props.value,
    Prism.languages[language.toLowerCase()]
  );

  const cls = `language-${language.toLowerCase()}`;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

interface IBlogPostProps {
  POST: string;
}

export default function BlogPost(props: IBlogPostProps) {
  const router = useRouter();
  const slug = router?.query?.slug?.[0];
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
      <h2>{post.title}</h2>
      <h4>{new Date(post.date).toLocaleDateString()}</h4>

      <div className={styles.tags}>
        {(post.tags || []).map((tag) => (
          <span key={tag}>
            <BlogPostTag tag={tag} />{' '}
          </span>
        ))}
      </div>

      <ReactMarkdown
        source={input}
        renderers={{
          code: CodeBlock,
        }}
        escapeHtml={false}
        skipHtml={true}
      />
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.

// Here we're fetching the markdown files to use a posts
export async function getStaticProps({ params }) {
  const slug = params.slug[0];
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
  // By returning { props: POSTS }, the Blog component
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
      .map((p) => ({ params: { slug: [p.slug] } })),
    fallback: false,
  };
}
