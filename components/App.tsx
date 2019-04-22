import * as React from 'react';
import { Link } from 'react-router';
import Navigation from './Navigation';

interface IRoute {
  mapMenuTitle: string;
  path: string;
}

export default function App({
  children,
  routes,
}: {
  children: React.ReactChildren;
  routes: IRoute[];
}) {
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
      .map((route, index, array) => (
        <span key={index}>
          <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
          {index + 1 < array.length && ' / '}
        </span>
      ));
  }

  return (
    <div id="outer-container">
      <Navigation>
        <main id="content">
          <div className="title">
            <h1>AMWAM - Amit Shah</h1>
            <h4>Agile Software Developer, based in London.</h4>
            <div style={{ paddingBottom: '100px' }}>{children}</div>
          </div>
        </main>
      </Navigation>
    </div>
  );
}
