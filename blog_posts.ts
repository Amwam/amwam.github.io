import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  date: string; // ISO 8601 date string
  post_number: number;
  published: boolean;
  slug?: string; // URL-friendly identifier
  tags?: string[]; // Optional array of tags
}

export function getPosts(): BlogPost[] {
  const postsDir = path.join(process.cwd(), 'public/posts');
  
  if (!fs.existsSync(postsDir)) {
    return [];
  }

  const files = fs.readdirSync(postsDir);
  
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      const post: any = {
        title: data.title,
        date: data.date,
        post_number: data.post_number,
        published: data.published,
        slug: data.slug ?? null,
        tags: data.tags ?? null,
      };
      
      return post as BlogPost;
    })
    .sort((a, b) => b.post_number - a.post_number);
}
