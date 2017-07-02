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
import Status from './components/Status';
import BlogPost from './components/BlogPost';
import {posts} from './blog_posts';

const routes = (
  <Route key="root" path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute key="index" component={Home} />

    <Route key="contact" path="contact" mapMenuTitle="Contact" component={Contact} />
    <Route key="about" path="about" mapMenuTitle="About" component={About} />
    <Route key="status" path="status" mapMenuTitle="Status" component={Status} />
      <Route key="blog" path="blog" mapMenuTitle="Blog" component={Blog} >
      {posts.map(post => (
          <Route key={post.slug} path={`${post.slug}`} mapMenuTitle={post.title} component={BlogPost} />
      ))}
      </Route>
    <Route key="404" path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);

const root = document.getElementById('root')

render(<Router history={browserHistory} routes={routes} />, root)
document.getElementById('prerender').remove(); //remove the prerender text
