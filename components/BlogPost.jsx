import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { posts } from '../blog_posts';
import 'whatwg-fetch';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);
    const post = posts.reduce((x, p) => {
      if (p.slug === this.props.route.path) {
        return p;
      }
      return x;
    });
    this.state = { input: null, post };
    fetch(`/posts/${post.post_number}.md`)
      .then(response => response.text())
      .then(input => this.setState({ input }));
  }

  render() {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <h4>{this.state.post.date}</h4>
        {this.state.input
          ? <ReactMarkdown source={this.state.input} />
          : 'Loading...'}
      </div>
    );
  }
}
