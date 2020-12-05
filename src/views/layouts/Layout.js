import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Row, Container } from 'reactstrap';
import loadable from '@loadable/component';
import RouteEnum from '../../constants/RouteEnum';
import Navbar from '../components/structure/Navbar';
import Sidebar from '../components/structure/Sidebar';
import Main from '../components/structure/Main';

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
                <Route path={RouteEnum.Home} exact component={HomePage} />
              </Switch>
            </Router>
          </Main>
        </Row>
      </Container>
    </>
  );
};

export default Layout;
