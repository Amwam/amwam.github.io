import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  title: string;
  date: string; // ISO 8601 date string
  published: boolean;
  slug?: string; // URL-friendly identifier
  tags?: string[]; // Optional array of tags
  _filename?: string; // Internal: absolute path to source .md file
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
      
      const post: BlogPost = {
        title: data.title,
        date: typeof data.date === 'string' ? data.date : String(data.date).slice(0, 10),
        published: data.published ?? false,
        slug: data.slug ?? undefined,
        tags: data.tags ?? undefined,
        _filename: filePath,
      };

      return post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
