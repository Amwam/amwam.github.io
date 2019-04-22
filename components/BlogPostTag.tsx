import * as React from 'react';
import { Link } from 'react-router';

export default function BlogPostTag({ tag }: { tag: string }) {
  return (
    <Link to={`/blog?tag=${tag}`} params={{ tag }}>
      {tag}
    </Link>
  );
}
