import React from 'react';

const Container = ({ children, ...props }) => (
  <div {...props} className="container">
    {children}
  </div>
);

export default Container;
