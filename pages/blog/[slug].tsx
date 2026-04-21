import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { type BlogPost, getPosts } from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import styles from './style.module.css';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

interface IBlogPostProps {
  POST: string;
  post: BlogPost;
}

function BlogPost(props: IBlogPostProps) {
  const { POST: input, post } = props;
  const router = useRouter();

  React.useEffect(() => {
    Prism.highlightAll();
  }, []);

  const slug = router?.query?.slug;

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
            {index != (post.tags?.length || 0) - 1 ? ', ' : ''}
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

  const { _filename: _, tags, slug: postSlug, ...rest } = result.post;
  return {
    props: {
      POST: result.content,
      post: { ...rest, slug: postSlug ?? null, tags: tags ?? null },
    },
  };
}

export async function getStaticPaths() {
  const { getPosts } = await import('../../blog_posts');
  const posts = getPosts();
  return {
    paths: posts
      .filter((p) => p.published && p.slug)
      .map((p) => ({ params: { slug: p.slug as string } })),
    fallback: false,
  };
}

export default BlogPost;
