import React, { Component } from 'react';

export default class ContactIcon extends Component {
    render() {
        return (
            <div className="social" style={{ flex: '1 auto', paddingLeft:10, paddingRight:10 }}>
                <a href={this.props.href} className="sub-text-social">
                    <img
                        className="social-contact"
                        src={`/images/social/${this.props.image}`}
                        style={{ textAlign:'center', verticalAlign:'middle'}}
                    />
                    <div className="sub-text-social">{this.props.subtext}</div>
                </a>
            </div>
        );
    }
}
