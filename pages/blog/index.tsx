import * as React from 'react';
import { type BlogPost, getPosts } from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './style.module.css';
import SEO from '../../components/SEO';
import Breadcrumbs from '../../components/Breadcrumbs';

interface BlogProps {
  posts: BlogPost[];
  children?: React.ReactNode;
  location?: { query: { tag: string } };
}

export async function getStaticProps() {
  const posts = getPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function Blog({ posts, children }: BlogProps) {
  const router = useRouter();
  const query = router.query as { tag?: string };

  const tagsSet: Set<string> = new Set();
  posts.forEach((post) => (post.tags || []).forEach((tag) => tagsSet.add(tag)));
  const tags = Array.from(tagsSet);

  if (children) {
    return <>{children}</>;
  }

  return (
    <div>
      <SEO
        title="Blog"
        description="Technical blog posts about TypeScript, React, Python, Docker, Git, and software engineering best practices. Topics include system architecture, development workflows, and engineering leadership."
        canonical="https://amwam.me/blog"
      />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]} />
      <h1>Blog</h1>
      <div className={styles.content}>
        <div className={styles['post-list']}>
          {posts
            .filter((post) => post.published)
            .filter((post) =>
              query.tag ? (post.tags || []).includes(query.tag) : true
            )
            .sort((a, b) => {
              return b.post_number - a.post_number;
            })
            .map((post) => (
              <div key={post.slug} className={styles['post-item']}>
                <strong>
                  <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </strong>{' '}
                <div>
                  <em className={styles['post-date']}>
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      dateStyle: 'long',
                    })}
                  </em>
                </div>
              </div>
            ))}
        </div>
        <div className={styles['tags-list']}>
          <b>Tags</b>
          <ul>
            {tags.map((tag, index) => (
              <li key={index}>
                <BlogPostTag tag={tag} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
