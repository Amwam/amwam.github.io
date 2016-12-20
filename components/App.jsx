import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';

const propTypes = {
    children: PropTypes.element.isRequired,
    routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
    function generateMapMenu() {
        let path = '';

        function nextPath(route) {
            path += (
                (path.slice(-1) === '/' ? '' : '/') +
                (route.path === '/' ? '' : route.path)
            );
            return path;
        }

        return (
            routes.filter(route => route.mapMenuTitle)
                .map((route, index, array) => (
                    <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
                        {(index + 1) < array.length && ' / '}
          </span>
                ))
        );
    }

    return (
        <div style={{display: 'flex', flexDirection:'row', paddingTop: 50}}>
            <div style={{paddingRight: 25, borderRight: 'lightgrey solid 1px'}}><Navigation /></div>
            <div style={{flex:1, paddingLeft: 25}}>
                <h1>AMWAM</h1>
                <h4>Agile Software Developer, based in London.</h4>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

App.propTypes = propTypes;

export default App;
