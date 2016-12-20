import React, { Component } from 'react';
import { Link } from 'react-router';

const selfStyle = {

                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            marginBottom: 20,
};

const linkStyle = {
    flex: 1,
    marginLef:'auto',
    marginRight:'auto',
    textAlign: 'center',
};
export default class Navigation extends Component {
    render() {
        return (
            <div style={{ flexDirection: 'column', width: 100 }}>
                <div style={linkStyle}>
                    <img
                        style={selfStyle}
                        src="https://secure.gravatar.com/avatar/8fc4b5f17beaf8893a97c896f68ba084?s=200"
                        alt="Me (Amit)" />
                </div>
                <div style={linkStyle}>
                    <Link to="/">
                        <strong>Home</strong>
                    </Link>
                </div>
                <div style={linkStyle}>
                    <Link to="/about">
                        <strong>About</strong>
                    </Link>
                </div>
                <div style={linkStyle}>
                    <Link to="/blog">
                        <strong>Blog</strong>
                    </Link>
                </div>
                <div style={linkStyle}>
                    <Link to="/contact">
                        <strong>Contact</strong>
                    </Link>
                </div>
            </div>
        );
    }
}
