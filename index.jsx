import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import {posts} from './blog_posts';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="contact" mapMenuTitle="Contact" component={Contact} />
    <Route path="about" mapMenuTitle="About" component={About} />
      <Route key="blog" path="blog" mapMenuTitle="Blog" component={Blog} >
      {posts.map(post => (
          <Route key={post.slug} path={`${post.slug}`} mapMenuTitle={post.title} component={BlogPost} />
      ))}
      </Route>
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />

  </Route>
);

const root = document.getElementById('root')

// if (global.__DEV__) {
//     console.log('here')
  const RedBox = require('redbox-react').default
  try {
    render(<Router history={browserHistory} routes={routes} />, root)
  } catch (e) {
    render(<RedBox error={e} />, root)
  }
// } else {
//     console.log('not here')
//     render(<Router history={browserHistory} routes={routes} />, root)
// }
// render(
//   <Router
//     history={browserHistory}
//     routes={routes}
//   />,
//   document.getElementById('root')
// );
