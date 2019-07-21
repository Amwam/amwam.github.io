import * as React from 'react';
import { Link } from 'react-router';
import { posts } from '../blog_posts';
import BlogPostTag from './BlogPostTag';

const tagsSet = new Set();
posts.forEach(post => (post.tags || []).forEach(tag => tagsSet.add(tag)));

const tags = Array.from(tagsSet);

export default class Blog extends React.PureComponent<{
  location: { query: { tag: string } };
}> {
  render() {
    if (this.props.children) {
      return this.props.children;
    }
    const tagQuery = this.props.location.query.tag;

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1 1 50%' }}>
          {posts
            .filter(post => post.published)
            .filter(post =>
              tagQuery ? (post.tags || []).includes(tagQuery) : true
            )
            .sort((a, b) => {
              return b.post_number - a.post_number;
            })
            .map(post => (
              <div key={post.slug} style={{ padding: 10 }}>
                <Link to={`/blog/${post.slug}`}>
                  <strong>{post.title}</strong>{' '}
                  <em style={{ fontSize: '0.8em' }}>{post.date}</em>
                </Link>
              </div>
            ))}
        </div>
        <div style={{ flex: 1 }}>
          <b>Tags</b>
          <ul>
            {tags.map(tag => (
              <li>
                <BlogPostTag tag={tag} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
