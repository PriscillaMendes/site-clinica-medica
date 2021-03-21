import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <div className="container col-3  mt-5 text-light">
      <div className="col-5 align-self-center">
        <meta name="description" content="The content you are looking for cannot be found." />
      </div>
      <h1 data-testid="heading">Page Not Found</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </div>
);

export default PageNotFound;
