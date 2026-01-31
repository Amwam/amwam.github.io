import * as React from 'react';
import ProductList from '../components/ProductList';
import Head from 'next/head';

const LANGUAGES = [
  {
    name: 'Python',
    link: 'http://www.python.org/',
  },
  {
    name: 'Typescript',
    link: 'http://www.typescriptlang.org/',
  },
  {
    name: 'Javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'HTML/CSS',
    link: 'http://www.w3.org/',
  },
  {
    name: 'Bash/Shell (Unix)',
    link: 'http://en.wikipedia.org/wiki/Bash_(Unix_shell)',
  },
];

const TOOLS = [
  { name: 'AWS', link: 'https://aws.amazon.com' },
  {
    name: 'Git',
    link: 'https://git-scm.com/',
  },
  {
    name: 'iOS',
    link: 'https://developer.apple.com/technologies/ios/',
  },
  {
    name: 'Docker',
    link: 'https://www.docker.com/',
  },
  {
    name: 'IntelliJ IDEA/PyCharm',
    link: 'https://www.jetbrains.com/idea/',
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.org',
  },
  {
    name: 'React',
    link: 'https://react.dev',
  },
  {
    name: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
  },
  {
    name: 'MySQL',
    link: 'https://www.mysql.com/',
  },
  {
    name: 'SQL (PostgreSQL, SQLite)',
    link: 'https://en.wikipedia.org/wiki/SQL',
  },
  {
    name: 'Unix',
    link: 'https://www.unix.org/',
  },
  {
    name: 'macOS',
    link: 'https://www.apple.com/macos/',
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>About | AMWAM - Amit Shah</title>
      </Head>
      <h1>About</h1>
      <div>
        I graduated from the University of Warwick with a 1st in Computer
        Science (MEng) in July of 2013. I spent over 10 years working at
        Entertainment Partners, which acquired We Got POP in 2020. I was the
        first developer as part of We Got POP, and saw it grow from a small
        startup through acquisition and further into enterprise. During my time
        there, I progressed from being the first engineer to Chief Architect EP
        International, building and scaling systems while growing and leading
        engineering teams across multiple countries. I am now a Tech Lead at
        monday.com, where I focus on building scalable systems and leading
        engineering teams.
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <h4>Programming languages</h4>
        </div>
        <div>
          I regularly work with a variety of languages, and am always looking to
          learn new ones. That said the following I would consider my main
          languages in which I am proficient
        </div>
        <ProductList products={LANGUAGES} />
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <h4>Tools and Platforms</h4>
        </div>
        <div>
          Again, I regularly work with many different tools and platforms, but
          the following is a selection of a few that come to mind
        </div>
        <ProductList products={TOOLS} />
      </div>
    </div>
  );
}
