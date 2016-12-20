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
                    return b.post_number - a.post_number;
                }).map(post => (
                    <div key={post.slug} style={{padding: 10}}>
                        <Link to={`/blog/${post.slug}`}>
                            <strong>{post.title}</strong> <em style={{fontSize: '0.8em'}}>{post.date}</em>
                        </Link>
                    </div>
                ))}
            </div>
        );
    }
}
