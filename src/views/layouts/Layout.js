import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Row, Container } from 'reactstrap';
import loadable from '@loadable/component';
import RouteEnum from '../../constants/RouteEnum';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Main from '../components/structure/Main';

import ErrorLayout from './ErrorLayout';

const HomePage = loadable(() => import('../pages/home'));

const Layout = () => {
  return (
    <>
      <Navbar />
      <Container fluid>
        <Row className="h-100">
          <Sidebar />
          <Main>
            <Router fallback={<span />}>
              <Switch>
                <Route exact path="/" render={() => <Redirect to={RouteEnum.Dashboard} />} />
                <Route path={RouteEnum.Dashboard} exact component={HomePage} />
                <Route path={RouteEnum.Associates} exact component={HomePage} />
                <Route path="/errors" component={ErrorLayout} />
                {/* <Redirect to="/errors/404" /> */}
              </Switch>
            </Router>
          </Main>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
