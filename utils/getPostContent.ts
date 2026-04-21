import fs from 'fs';
import path from 'path';
import { BlogPost, getPosts } from '../blog_posts';
import matter from 'gray-matter';

export interface PostContentResult {
  content: string;
  post: BlogPost;
}

export function getPostContent(slug: string): PostContentResult | null {
  const posts = getPosts();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return null;
  }

  const postsFilename = path.join(
    process.cwd(),
    'public/posts',
    `${post.post_number}.md`
  );

  try {
    const fileContents = fs.readFileSync(postsFilename, 'utf8');
    const { content } = matter(fileContents);

    return {
      content,
      post,
    };
  } catch (error) {
    console.error(`Error reading post file for slug ${slug}:`, error);
    return null;
  }
}
