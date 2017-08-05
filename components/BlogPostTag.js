import React, { PureComponent } from "react";
import { Link } from "react-router";

export default class BlogPostTag extends PureComponent {
  render() {
    const { tag } = this.props;
    return (
      <Link to={`/blog?tag=${tag}`} params={{ tag }}>
        {tag}
      </Link>
    );
  }
}
