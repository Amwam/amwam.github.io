import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router';
import BurgerMenu from 'react-burger-menu';
import Radium from 'radium';

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
};

const bmStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#000000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#ffffff'
    },
    bmMenu: {
        background: '#ffffff',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        width: 150,
    },
    bmMorphShape: {
        fill: '#ffffff'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
    bmMenuWrap: {
        position: 'float',
        float:'left',
    },
};

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            side: 'right',
            showMenu: window.innerWidth > 650,
        };

        window.addEventListener('resize', (e) => {
            this.setState({showMenu: e.currentTarget.innerWidth > 650})

            })

    }

    render() {
        const Menu = BurgerMenu['push'];

        return (
            <Menu
                width={150}
                id={'push'}
                pageWrapId={'content'}
                outerContainerId={'outer-container'}
                noOverlay
                isOpen={this.state.showMenu}
                styles={bmStyles}>
                    <img
                        style={selfStyle}
                        src="https://secure.gravatar.com/avatar/8fc4b5f17beaf8893a97c896f68ba084?s=200"
                        alt="Me (Amit)" />
                    <Link to="/" className="menu-item" style={linkStyle}>
                        <strong>Home</strong>
                    </Link>
                    <Link to="/about" className='menu-item' style={linkStyle}>
                        <strong>About</strong>
                    </Link>
                    <Link to="/blog" className='menu-item' style={linkStyle}>
                        <strong>Blog</strong>
                    </Link>
                    <Link to="/contact" className='menu-item' style={linkStyle}>
                        <strong>Contact</strong>
                    </Link>

            </Menu>
        );
    }
}
