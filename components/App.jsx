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
      path +=
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path);
      return path;
    }

    return routes
      .filter(route => route.mapMenuTitle)
      .map((route, index, array) =>
        <span key={index}>
          <Link to={nextPath(route)}>
            {route.mapMenuTitle}
          </Link>
          {index + 1 < array.length && ' / '}
        </span>
      );
  }

  return (
    <div id="outer-container">
      <Navigation>
        <main
          id="content"
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
            padding: 10,
          }}
        >
          <div
            style={{
              flex: 1,
              height: '100%',
              marginTop: 50,
              marginLeft: '2%',
              marginRight: '2%',
              float: 'left',
            }}
          >
            <h1>AMWAM - Amit Shah</h1>
            <h4>Agile Software Developer, based in London.</h4>
            <div style={{ paddingBottom: '100px' }}>
              {children}
            </div>
          </div>
        </main>
      </Navigation>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
