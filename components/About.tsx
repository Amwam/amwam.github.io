import * as React from 'react';
import ProductList from './ProductList';

const languages = [
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
    link: 'http://jquery.com/',
  },
  {
    name: 'Swift',
    link: 'https://swift.org/',
  },
  {
    name: 'Java',
    link: 'http://www.java.com/',
  },
  {
    name: 'Objective-C',
    link:
      'https://developer.apple.com/library/mac/documentation/cocoa/conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
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

const tools = [
  {
    name: 'Git',
    link: 'http://git-scm.com/',
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
    link: 'http://www.jetbrains.com/idea/',
  },
  {
    name: 'Jenkins',
    link: 'https://jenkins-ci.org/',
  },
  {
    name: 'Amazon Web Services (AWS)',
    link: 'http://aws.amazon.com/',
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.org',
  },
  {
    name: 'Xcode',
    link: 'https://developer.apple.com/xcode/',
  },
  {
    name: 'PostgreSQL',
    link: 'http://www.postgresql.org/',
  },
  {
    name: 'SQL (MySQL, SQLite)',
    link: 'http://en.wikipedia.org/wiki/SQL',
  },
  {
    name: 'VIM',
    link: 'http://vim.org',
  },
  {
    name: 'Unix',
    link: 'http://www.unix.org/',
  },
  {
    name: 'OS X',
    link: 'http://www.apple.com/osx/',
  },
];

export default function About() {
  React.useEffect(() => {
    document.dispatchEvent(new Event('prerender-trigger'));
  });
  return (
    <div>
      <div>
        I graduated from the University of Warwick with a 1st in Computer
        Science (MEng) in July of 2013. Since then I have worked at BSkyB as a
        Software Developer, and am currently employed by WeGotPOP. During my
        degree I also worked as a freelancer, specialising as an iOS developer.
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <h4>Programming languages</h4>
        </div>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <em>
            I regularly work with a variety of languages, and am always looking
            to learn new ones. That said the following I would consider my main
            languages in which I am proficient
          </em>
        </div>
        <ProductList products={languages} />
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <h4>Tools and Platforms</h4>
        </div>
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <em>
            Again, I regularly work with many different tools and platforms, but
            the following is a selection of a few that come to mind
          </em>
        </div>
        <ProductList products={tools} />
      </div>
    </div>
  );
}
