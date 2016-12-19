import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ExampleComponent from './components/ExampleComponent';
import ExampleTwoDeepComponent from './components/ExampleTwoDeepComponent';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import {posts} from './blog_posts';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="example" mapMenuTitle="Example" component={ExampleComponent}>
      <Route path="two-deep" mapMenuTitle="Two Deep" component={ExampleTwoDeepComponent} />
    </Route>
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

render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
