import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loadable from '@loadable/component';
import { Row, Container } from 'reactstrap';
import RouteMap from '../../constants/RouteMap';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Main from '../components/structure/Main';
import Loader from '../components/common/Loader';

import DashboardRoutes from './DashboardRoutes';

const DashboardPage = loadable(() => import('../pages/dashboard'), { fallback: <Loader /> });

const Layout = () => (
  <>
    <Navbar />
    <Container fluid>
      <Row className="h-100">
        <Sidebar />
        <Main>
          <Switch>
            <Route path={RouteMap.Dashboard.root} exact component={DashboardPage} />
            <DashboardRoutes />
          </Switch>
        </Main>
      </Row>
    </Container>
  </>
);

export default Layout;
