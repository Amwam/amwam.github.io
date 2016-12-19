import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div>
      <div>
          <Link to="/about">About</Link>
          <br />
          <Link to="/blog">Blog</Link>
           <br />
          <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Home;
