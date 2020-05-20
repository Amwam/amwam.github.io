import Prism from 'prismjs';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router';
import posts from '../blog_posts';
import BlogPostTag from './BlogPostTag';

function CodeBlock(props: { language: string; literal: string }) {
  const language = props.language || 'javascript';
  const html = Prism.highlight(
    props.literal,
    Prism.languages[language.toLowerCase()]
  );
  const cls = `language-${props.language}`;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

interface IBlogPostProps {
  route: { path: string };
}

export default function BlogPost(props: IBlogPostProps) {
  const [input, setInput] = React.useState(undefined);
  const post = posts.reduce((x, p) => {
    if (p.slug === props.route.path) {
      return p;
    }
    return x;
  });

  React.useEffect(() => {
    fetch(`https://amwam.me/posts/${post.post_number}.md`)
      .then((response) => response.text())
      .then((i) => {
        setInput(i);
      });
  }, []);

  React.useEffect(() => {
    if (input !== undefined) {
      document.dispatchEvent(new Event('prerender-trigger'));
    }
  }, [input]);

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{new Date(post.date).toLocaleDateString()}</h4>

      {(post.tags || []).map((tag) => (
        <span key={tag}>
          <BlogPostTag tag={tag} />{' '}
        </span>
      ))}
      {input ? (
        <ReactMarkdown
          source={input}
          renderers={{ CodeBlock }}
          escapeHtml={false}
          skipHtml={true}
        />
      ) : (
        'Loading...'
      )}
    </div>
  );
}
