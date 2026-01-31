import fs from 'fs';

interface Post {
  slug: string;
  date: string;
}

export async function generateSitemap(allPosts: Post[]) {
  console.log('Generating sitemap');

  const baseUrl = 'https://amwam.me';
  const staticPages = [
    { url: '', priority: '1.0' },
    { url: '/about', priority: '0.8' },
    { url: '/blog', priority: '0.8' },
    { url: '/contact', priority: '0.6' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
${allPosts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  fs.writeFileSync('./public/sitemap.xml', sitemap);
}
