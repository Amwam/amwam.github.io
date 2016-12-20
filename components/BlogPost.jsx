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
            .then(input => this.setState({input }));
    }

    render() {
        if (this.state.input) {
            return (
                <div>
                    <h2>{this.state.post.title}</h2>
                    <ReactMarkdown source={this.state.input} />,
                </div>
            )
        }

        return (
            <div>
                <h2>{this.state.post.title}</h2>
                Loading...
            </div>
        )
    }
}
