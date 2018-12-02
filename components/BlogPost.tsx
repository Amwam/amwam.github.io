import * as React from "react";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";
import { Link } from "react-router";
import { posts } from "../blog_posts";
import BlogPostTag from "./BlogPostTag";

function CodeBlock(props: { language: string; literal: string }) {
  const language = props.language || "javascript";
  var html = Prism.highlight(
    props.literal,
    Prism.languages[language.toLowerCase()]
  );
  var cls = "language-" + props.language;

  return (
    <pre className={cls}>
      <code dangerouslySetInnerHTML={{ __html: html }} className={cls} />
    </pre>
  );
}

interface IBlogPostProps {
  route: { path: string };
}
interface IBlogPostState {
  post: { title: string; date: string; tags?: string[] };
  input: string | undefined;
}

export default class BlogPost extends React.Component<
  IBlogPostProps,
  IBlogPostState
> {
  constructor(props) {
    super(props);
    const post = posts.reduce((x, p) => {
      if (p.slug === this.props.route.path) {
        return p;
      }
      return x;
    });
    this.state = { input: undefined, post };
    fetch(`https://amwam.me/posts/${post.post_number}.md`)
      .then(response => response.text())
      .then(input => this.setState({ input }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <h4>{this.state.post.date}</h4>

        {(this.state.post.tags || []).map(tag => (
          <span key={tag}>
            <BlogPostTag tag={tag} />{" "}
          </span>
        ))}
        {this.state.input ? (
          <ReactMarkdown
            source={this.state.input}
            renderers={{ CodeBlock }}
            escapeHtml={false}
            skipHtml={true}
          />
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}
