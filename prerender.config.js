const blogPosts = require('./blog_posts');

const blogURLs = blogPosts.map(post => `/blog/${post.slug}`);

module.exports = {
  routes: ['/', '/about', '/blog', '/contact', ...blogURLs],
  rendererConfig: {
    headless: true,
    renderAfterDocumentEvent: 'prerender-trigger',
  },
};
