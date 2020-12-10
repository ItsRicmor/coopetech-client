import React, { useState } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import AppContext from './context';
import Layout from './layouts/Layout';

const Provider = AppContext.Provider;

export default (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

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
