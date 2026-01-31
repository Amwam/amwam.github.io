import * as React from 'react';
import styles from './index.module.css';
import posts from '../blog_posts';
import { generateRssFeed } from '../utils/rss';
import { generateSitemap } from '../utils/sitemap';
import SEO from '../components/SEO';

export default function Home() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Amit Shah',
    jobTitle: 'Tech Lead',
    worksFor: {
      '@type': 'Organization',
      name: 'monday.com',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Warwick',
    },
    url: 'https://amwam.me',
    sameAs: [
      'https://github.com/Amwam',
      'https://mastodon.social/@Amwam',
      'https://stackoverflow.com/users/818739/amit-shah',
      'http://uk.linkedin.com/pub/amit-shah/25/184/a84/',
    ],
  };

  return (
    <div>
      <SEO
        title="AMWAM - Amit Shah"
        description="Tech Lead at monday.com. Previously Chief Architect at Entertainment Partners. Specializing in TypeScript, React, Python, and scalable system architecture."
        canonical="https://amwam.me"
        structuredData={personSchema}
      />
      <h1>Amit Shah</h1>
      <p>
        Tech Lead with over a decade of experience building and scaling systems.
        I focus on engineering leadership, system architecture, and mentoring
        developers.
      </p>
      <div>
        <h2>Current & Previous Roles</h2>
        <ul>
          <li className={styles['link-item']}>
            Tech Lead @{' '}
            <a href="https://monday.com/" rel="noopener noreferrer">
              monday.com
            </a>
          </li>
          <li className={styles['link-item']}>
            Previously Chief Architect EP International @{' '}
            <a href="https://www.ep.com/" rel="noopener noreferrer">
              Entertainment Partners UK
            </a>
            <ul>
              <li>Entertainment Partners acquired We Got POP LTD in 2020</li>
            </ul>
          </li>
          <li className={styles['link-item']}>
            Previously a Mentor @{' '}
            <a href="https://codeyourfuture.co/" rel="noopener noreferrer">
              Code Your Future
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Connect</h2>
        <ul>
          <li className={styles['link-item']}>
            <a href="https://github.com/Amwam/" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className={styles['link-item']}>
            <a
              rel="me noopener noreferrer"
              href="https://mastodon.social/@Amwam"
            >
              Mastodon
            </a>
          </li>
          <li className={styles['link-item']}>
            <a
              href="https://stackoverflow.com/users/818739/amit-shah"
              rel="noopener noreferrer"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = posts
    .filter((post) => post.published)
    .map((post) => ({
      title: post.title,
      date: post.date,
      slug: post.slug,
      excerpt: '',
    }));

  await generateRssFeed(allPosts);
  await generateSitemap(allPosts);

  return {
    props: { allPosts },
  };
};
