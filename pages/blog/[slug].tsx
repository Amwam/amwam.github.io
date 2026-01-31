import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import posts from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import styles from './style.module.css';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

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

  // Generate article excerpt for meta description
  const excerpt =
    input
      .slice(0, 150)
      .replace(/[#*`\n]/g, ' ')
      .trim() + '...';

  // Article structured data
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Amit Shah',
      url: 'https://amwam.me',
    },
    publisher: {
      '@type': 'Person',
      name: 'Amit Shah',
    },
    description: excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://amwam.me/blog/${slug}`,
    },
  };

  return (
    <div>
      <SEO
        title={post.title}
        description={excerpt}
        canonical={`https://amwam.me/blog/${slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          author: 'Amit Shah',
        }}
        structuredData={articleSchema}
      />
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      <h1>{post.title}</h1>
      <div>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString('en-GB', {
            dateStyle: 'long',
          })}
        </time>
      </div>

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
export async function getStaticProps({ params }: { params: { slug: string } }) {
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

export default BlogPost;
