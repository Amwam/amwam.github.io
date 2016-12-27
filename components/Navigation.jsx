import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';
import Radium from 'radium';
import Sidebar from 'react-sidebar';

let Link = Radium(RouterLink);

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
    marginLef: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    marginBottom: 20,
};

const contentHeaderMenuLink = {
    textDecoration: 'none',
    color: 'black',
    padding: 10,
    fontSize: 40,
};

const sidebarStyles = { sidebar: { width: 150 }, overlay: {width:150, backgroundColor: 'white'} }

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side: 'right',
            docked: window.innerWidth > 650,
            sidebarOpen: false,
        };

        window.addEventListener('resize', (e) => {
            this.setState({ docked: e.currentTarget.innerWidth > 650 })

        })

    }

    onSetSidebarOpen = (open) => {
        this.setState({ sidebarOpen: open });
    };

    toggleOpen = () => {
        this.setState({ sidebarOpen: !this.state.sidebarOpen });
    };

    closeSidebar= () => {
        this.setState({sidebarOpen: false})
    };

    render() {
        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen} href="#" style={contentHeaderMenuLink}>=</a>}
      </span>
        );

        const sidebarContent = (<div>
            <a onClick={this.closeSidebar} href='#' style={{float:'right', marginTop:'-20px'}}>X</a>
            <img
                style={selfStyle}
                src="https://secure.gravatar.com/avatar/8fc4b5f17beaf8893a97c896f68ba084?s=200"
                alt="Me (Amit)" />
            <br />
            <div style={linkStyle}>
                <Link onClick={this.closeSidebar} to="/" className="menu-item">
                    <strong>Home</strong>
                </Link>
            </div>
            <div style={linkStyle}>
                <Link onClick={this.closeSidebar} to="/about" className='menu-item'>
                    <strong>About</strong>
                </Link>
            </div>
            <div style={linkStyle}>
                <Link onClick={this.closeSidebar} to="/blog" className='menu-item'>
                    <strong>Blog</strong>
                </Link>
            </div>
            <div style={linkStyle}>
                <Link onClick={this.closeSidebar} to="/contact" className='menu-item'>
                    <strong>Contact</strong>
                </Link>
            </div>
        </div>);

        return (
            <Sidebar sidebar={sidebarContent}
                     open={this.state.sidebarOpen}
                     docked={this.state.docked}
                     onSetOpen={this.onSetSidebarOpen}
                     styles={sidebarStyles}
                     shadow={false}>
                {contentHeader}
                {this.props.children}
            </Sidebar>
        );
    }
}
