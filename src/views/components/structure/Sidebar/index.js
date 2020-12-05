import React, { useState } from 'react';
import SideMenu from './components/SideMenu';
import allRoutes from '../../../routes';
import './sidebar.scss';

const Sidebar = () => {
  const [routes] = useState(allRoutes);
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <SideMenu routes={routes} />
      </div>
    </nav>
  );
};

export default Sidebar;
