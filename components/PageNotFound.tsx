import * as React from 'react';

function PageNotFound({ location }: { location: { pathname: string } }) {
  return (
    <p>
      Page not found - the path, <code>{location.pathname}</code>, did not match
      any routes.
    </p>
  );
}

export default PageNotFound;
