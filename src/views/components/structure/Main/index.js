import React from 'react';

const Main = ({ children }) => (
  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 overflow-auto pb-5" style={{ height: '100vh' }}>
    {children}
  </main>
);

export default Main;
