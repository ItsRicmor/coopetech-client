import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';
import RouteMap from '../../constants/RouteMap';

import DashboardLayout from './DashboardLayout';
import ErrorLayout from './ErrorLayout';

const Layout = () => (
  <Router fallback={<span />}>
    <Switch>
      <Route path={RouteMap.Home.root} exact render={() => <Redirect to={RouteMap.Dashboard.root} />} />
      <Route path={RouteMap.Errors.root} component={ErrorLayout} />
      <Route component={DashboardLayout} />
    </Switch>
    <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
  </Router>
);

export default Layout;
