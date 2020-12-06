import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import Error404 from '../pages/not-found';

const ErrorLayout = ({ match: { url } }) => (
  <Switch>
    <Route path={`${url}/404`} component={Error404} />
    {/*Redirect*/}
    <Redirect to={`${url}/404`} />
  </Switch>
);

ErrorLayout.propTypes = { match: PropTypes.object };

export default ErrorLayout;
