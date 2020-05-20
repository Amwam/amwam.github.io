import 'current-input';
import * as React from 'react';
import { render } from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import posts from '../blog_posts';
import About from '../components/About';
import App from '../components/App';
import Blog from '../components/Blog';
import BlogPost from '../components/BlogPost';
import Contact from '../components/Contact';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import Status from '../components/Status';

const routes = (
  <Route key="root" path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute key="index" component={Home} />

    <Route
      key="contact"
      path="contact"
      mapMenuTitle="Contact"
      component={Contact}
    />
    <Route key="about" path="about" mapMenuTitle="About" component={About} />
    <Route
      key="status"
      path="status"
      mapMenuTitle="Status"
      component={Status}
    />
    <Route key="blog" path="blog" mapMenuTitle="Blog" component={Blog}>
      {posts.map((post) => (
        <Route
          key={post.slug}
          path={`${post.slug}`}
          mapMenuTitle={post.title}
          component={BlogPost}
        />
      ))}
    </Route>
    <Route
      key="404"
      path="*"
      mapMenuTitle="Page Not Found"
      component={PageNotFound}
    />
  </Route>
);

const root = document.getElementById('root');

render(
  <React.StrictMode>
    <Router history={browserHistory} routes={routes} />
  </React.StrictMode>,
  root
);
const preRenderElement = document.getElementById('prerender');
if (preRenderElement) {
  // remove the prerender text
  preRenderElement.remove();
}
