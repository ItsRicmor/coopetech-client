import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import loadable from '@loadable/component';
import { Row, Container } from 'reactstrap';
import RouteEnum from '../../constants/RouteEnum';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Main from '../components/structure/Main';
import Loader from '../components/common/Loader';

import DashboardRoutes from './DashboardRoutes';

const DashboardPage = loadable(() => import('../pages/dashboard'), { fallback: <Loader /> });

const Layout = () => (
  <Router fallback={<span />}>
    <Navbar />
    <Container fluid>
      <Row className="h-100">
        <Sidebar />
        <Main>
          <Switch>
            <Route path={RouteEnum.Dashboard} exact component={DashboardPage} />
            <DashboardRoutes />
          </Switch>
        </Main>
      </Row>
    </Container>
  </Router>
);

export default Layout;
