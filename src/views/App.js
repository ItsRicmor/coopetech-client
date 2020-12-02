import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './layouts/Layout';

export default (props) => {
  return (
    <ConnectedRouter history={props.history}>
      <Layout />
    </ConnectedRouter>
  );
};
