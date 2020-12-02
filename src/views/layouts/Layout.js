import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { CloseButton, Fade } from '../components/common/Toast';
import Container from '../components/common/Container';
import loadable from '@loadable/component';
import Loader from '../components/common/Loader';
import RouteEnum from '../../constants/RouteEnum';

const HomePage = loadable(() => import('../pages/home'), { fallback: <Loader /> });

const Layout = () => {
  return (
    <Container>
      <Router fallback={<span />}>
        <Switch>
          <Route path={RouteEnum.Home} exact component={HomePage} />
        </Switch>
        <ToastContainer transition={Fade} closeButton={<CloseButton />} position={toast.POSITION.BOTTOM_LEFT} />
      </Router>
    </Container>
  );
};

export default Layout;
