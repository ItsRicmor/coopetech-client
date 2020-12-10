import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RouteEnum from '../../constants/RouteEnum';

import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';

const Layout = () => (
  <Router fallback={<span />}>
    <Switch>
      <Route path="/" exact render={() => <Redirect to={RouteEnum.Dashboard} />} />
      <Route path="/errors" component={ErrorLayout} />
      <Route component={DashboardLayout} />
    </Switch>
  </Router>
);

export default Layout;
