import * as React from 'react';
import Link from 'next/link';

export default function BlogPostTag({ tag }: { tag: string }) {
  return (
    <Link href={`/blog?tag=${tag}`}>
      {tag}
    </Link>
  );
}
