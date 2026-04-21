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
  allTags: string[];
}

export async function getStaticProps() {
  const rawPosts = getPosts().filter((p) => p.published);
  const tagsSet = new Set<string>();
  rawPosts.forEach((p) => (p.tags ?? []).forEach((t) => tagsSet.add(t)));
  // Strip internal _filename field and normalise optional fields for JSON serialisation
  const posts = rawPosts.map(({ _filename: _, tags, ...rest }) => ({
    ...rest,
    tags: tags ?? null,
  }));
  return {
    props: {
      posts,
      allTags: Array.from(tagsSet).sort(),
    },
  };
}

export default function Blog({ posts, allTags }: BlogProps) {
  const router = useRouter();
  const query = router.query as { tag?: string };

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
            .filter((post) =>
              query.tag ? (post.tags || []).includes(query.tag) : true
            )
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
            {allTags.map((tag, index) => (
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
