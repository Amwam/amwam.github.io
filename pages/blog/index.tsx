import * as React from 'react';
import posts from '../../blog_posts';
import BlogPostTag from '../../components/BlogPostTag';
import { useRouter } from 'next/router';
import Link from 'next/link';

const tagsSet: Set<string> = new Set();
posts.forEach((post) => (post.tags || []).forEach((tag) => tagsSet.add(tag)));

const tags = Array.from(tagsSet);

export default function Blog(props: {
  children?: React.ReactNode;
  location: { query: { tag: string } };
}) {
  const router = useRouter();
  const query = router.query as { tag?: string };
  if (props.children) {
    return props.children;
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1 1 50%' }}>
        {posts
          .filter((post) => post.published)
          .filter((post) =>
            query.tag ? (post.tags || []).includes(query.tag) : true
          )
          .sort((a, b) => {
            return b.post_number - a.post_number;
          })
          .map((post) => (
            <div key={post.slug} style={{ padding: 10 }}>
              <strong>
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </strong>{' '}
              <em style={{ fontSize: '0.8em' }}>{post.date}</em>
            </div>
          ))}
      </div>
      <div style={{ flex: 1 }}>
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
  );
}
