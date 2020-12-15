import React, { useState, useContext } from 'react';
import { Nav, Collapse } from 'reactstrap';
import AppContext from '../../../context';
import SideMenu from './components/SideMenu';
import allRoutes from '../../../routes';
import { useWindowDimensions } from '../../../hooks';
import BreakpointsEnum from '../../../../constants/BreakpointsEnum';
import './sidebar.scss';

const Sidebar = () => {
  const [routes] = useState(allRoutes);

  const { isOpenSidebar } = useContext(AppContext);

  const { width } = useWindowDimensions();

  return (
    <Collapse isOpen={isOpenSidebar || width >= BreakpointsEnum.MD} className="col-md-3 col-lg-2 d-md-block sidebar">
      <Nav className="bg-light sidebar-sticky pt-3">
        <SideMenu routes={routes} />
      </Nav>
    </Collapse>
  );
};

export default Sidebar;
