import React, { Component } from 'react';

export default class ContactIcon extends Component {
    render() {
        return (
            <div className="social" style={{ flex: '1 auto', padding: 10 }}>
                <a href={this.props.href} className="sub-text-social">
                    <div className="sub-text-social"><strong>{this.props.subtext}</strong></div>
                </a>
            </div>
        );
    }
}
