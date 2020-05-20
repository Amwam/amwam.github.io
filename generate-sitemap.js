const fs = require('fs');
const builder = require('xmlbuilder');
const posts = require('./blog_posts');

const baseURLPaths = ['about/', 'contact/', 'blog/'];

const allTags = new Set();
posts.forEach(({ tags }) => {
  if (tags) {
    tags.forEach(v => allTags.add(v));
  }
});

function urlBuilder(route) {
  return { url: { loc: `https://amwam.me/${route}` } };
}

const slugs = posts
  .filter(post => post.published)
  .map(p => p.slug)
  .filter(s => !!s);

const siteMap = {
  urlset: [
    urlBuilder(''),
    ...baseURLPaths.map(urlBuilder),
    ...Array.from(allTags).map(tag => urlBuilder(`blog?tag=${tag}`)),
    ...slugs.map(slug => urlBuilder(`blog/${slug}`)),
  ],
};

const xml = builder.create(siteMap).end({ pretty: true });
fs.writeFile('dist/sitemap.xml', xml, function(err) {
  if (err) throw err;
});
