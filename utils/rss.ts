import fs from 'fs';
import RSS from 'rss';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

export interface PostForRss {
  title: string;
  date: string;
  slug: string;
  content: string;
}

function convertMarkdownToHtml(markdown: string): string {
  return renderToStaticMarkup(
    React.createElement(ReactMarkdown, { children: markdown, skipHtml: true })
  );
}

export async function generateRssFeed(posts: PostForRss[]) {
  console.log('Generating RSS feed');

  const site_url = 'https://amwam.me';
  const feed = new RSS({
    title: "Amit Shah's Blog posts",
    description: "Welcome to Amit Shah's blog!",
    site_url,
    feed_url: `${site_url}/rss.xml`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  for (const post of posts) {
    feed.item({
      title: post.title,
      description: convertMarkdownToHtml(post.content),
      url: `${site_url}/blog/${post.slug}`,
      date: post.date,
    });
  }

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
