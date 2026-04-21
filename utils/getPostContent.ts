import fs from 'fs';
import matter from 'gray-matter';
import { BlogPost, getPosts } from '../blog_posts';

export interface PostContentResult {
  content: string;
  post: BlogPost;
}

export function getPostContent(
  postOrSlug: BlogPost | string
): PostContentResult | null {
  let post: BlogPost | undefined;

  if (typeof postOrSlug === 'string') {
    post = getPosts().find((p) => p.slug === postOrSlug);
  } else {
    post = postOrSlug;
  }

  if (!post?._filename) {
    return null;
  }

  try {
    const { content } = matter(fs.readFileSync(post._filename, 'utf8'));
    return { content, post };
  } catch (error) {
    console.error(`Error reading post "${post.slug ?? post.title}":`, error);
    return null;
  }
}
