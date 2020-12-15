import React, { useState } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import AppContext from './context';
import Layout from './layouts/Layout';
import { useToastEffect } from './hooks';

const { Provider } = AppContext;

export default (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  useToastEffect();

  const toggleMenuSidebar = () => setIsOpenSidebar(!isOpenSidebar);

  const closeMenuSidebar = () => setIsOpenSidebar(false);

  const value = { isOpenSidebar, toggleMenuSidebar, closeMenuSidebar };

  return (
    <ConnectedRouter history={props.history}>
      <Provider value={value}>
        <Layout />
      </Provider>
    </ConnectedRouter>
  );
};
