import Prism from "prismjs";
import * as React from "react";
import ReactMarkdown from "react-markdown";
import posts from "../../blog_posts";
import BlogPostTag from "../components/BlogPostTag";
import { useRouter } from "next/router";
import styles from "./style.module.css";

function CodeBlock(props: { language: string; value: string }) {
  const language = props.language || "javascript";
  const html = Prism.highlight(
    props.value,
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
  const router = useRouter();
  const slug = router?.query?.slug?.[0];

  const [input, setInput] = React.useState(undefined);
  const post = posts.reduce((x, p) => {
    if (p.slug === slug) {
      return p;
    }
    return x;
  });

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(`/posts/${post.post_number}.md`, { signal: controller.signal })
      .then((response) => response.text())
      .then((i) => {
        setInput(i);
      });
    return () => {
      controller.abort();
    };
  }, [slug]);

  if (!slug) {
    return <div>Post not found.</div>;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{new Date(post.date).toLocaleDateString()}</h4>

      <div className={styles.tags}>
        {(post.tags || []).map((tag) => (
          <span key={tag}>
            <BlogPostTag tag={tag} />{" "}
          </span>
        ))}
      </div>

      {input ? (
        <ReactMarkdown
          source={input}
          renderers={{
            code: CodeBlock,
          }}
          escapeHtml={false}
          skipHtml={true}
        />
      ) : (
        "Loading..."
      )}
    </div>
  );
}
