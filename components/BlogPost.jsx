import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

import {posts} from '../blog_posts';

export default class BlogPost extends Component {
    render() {
        const post = posts.reduce((x, p) => {
            if (p.slug === this.props.route.path) {
                return p;
            }
            return x;
        });

        const input = require(`raw-loader!./posts/${post.post_number}.md`);
        return (
            <div>
                <h2>{post.title}</h2>
                <ReactMarkdown source={input} />,
            </div>
        )
    }
}
