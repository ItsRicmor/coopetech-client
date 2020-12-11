import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import RouteMap from '../../constants/RouteMap';

import Error404 from '../pages/not-found';

const ErrorLayout = () => (
  <Switch>
    <Route path={RouteMap.Errors.notFound} exact component={Error404} />
    {/*Redirect*/}
    <Redirect to={RouteMap.Errors.notFound} />
  </Switch>
);

ErrorLayout.propTypes = { match: PropTypes.object };

export default ErrorLayout;
