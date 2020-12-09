import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Row, Container } from 'reactstrap';
import RouteEnum from '../../constants/RouteEnum';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Main from '../components/structure/Main';

import ErrorLayout from './ErrorLayout';

import HomePage from '../pages/home';
import InventoryPage from '../pages/inventory';
import { ConnectedRouter } from 'connected-react-router';

const Layout = () => {
  return (
    <Router fallback={<span />}>
      <Navbar />
      <Container fluid>
        <Row className="h-100">
          <Sidebar />
          <Main>
            <Switch>
              <Route path={RouteEnum.Dashboard} exact component={HomePage} />
              <Route path={RouteEnum.Inventory} exact component={InventoryPage} />
              <Route path="/errors" component={ErrorLayout} />
              <Redirect to="/errors/404" />
            </Switch>
          </Main>
        </Row>
      </Container>
    </Router>
  );
};

export default Layout;
