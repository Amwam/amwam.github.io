import React, { Component } from 'react';
import { Link } from 'react-router';
import { posts } from '../blog_posts';

export default class Blog extends Component {
    render() {

        if (this.props.children) {
            return this.props.children;
        }

        return (
            <div>
                {posts.filter(post => post.published).sort((a, b) => {
                    return a.post_number < b.post_number
                }).map(post => (
                    <div key={post.slug}>
                        <Link to={`/blog/${post.slug}`}>
                            <strong>{post.title}</strong>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}
