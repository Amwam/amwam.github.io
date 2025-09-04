import fs from 'fs';
import RSS from 'rss';
import { getPostContent } from './getPostContent';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

interface Post {
  title: string;
  date: string;
  slug: string;
}

function convertMarkdownToHtml(markdown: string): string {
  const markdownComponent = React.createElement(ReactMarkdown, {
    children: markdown,
    skipHtml: true,
  });
  return renderToStaticMarkup(markdownComponent);
}

export async function generateRssFeed(allPosts: Post[]) {
  console.log('Generating RSS feed');

  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://amwam.me'
      : 'http://localhost:3000';

  const feedOptions = {
    title: "Amit Shah's Blog posts",
    description: "Welcome to Amit Shah's blog!",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  };

  const feed = new RSS(feedOptions);

  // Add each individual post to the feed.
  allPosts.map((post) => {
    const postContent = getPostContent(post.slug);
    let description: string;

    // Convert markdown content to HTML
    description = convertMarkdownToHtml(postContent.content);

    feed.item({
      title: post.title,
      description: description,
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  });

  // Write the RSS feed to a file as XML.
  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
