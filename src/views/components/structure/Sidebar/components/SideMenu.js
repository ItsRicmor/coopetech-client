import React from 'react';
import SideMenuItem from './SideIMenuItem';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Nav, NavItem, NavLink as BootstrapNavLink } from 'reactstrap';

const SideMenu = ({ routes = [] }) => (
  <ul className="nav flex-column">
    {routes.map((route, index) => {
      if (!route.children) {
        return (
          <NavItem key={index}>
            <NavLink {...route}>
              <SideMenuItem route={route} />
            </NavLink>
          </NavItem>
        );
      }
      return (
        <NavItem key={index}>
          <NavLink className="nav-link" {...route}>
            <SideMenuItem route={route} />
          </NavLink>
        </NavItem>
      );
    })}
  </ul>
);

export default SideMenu;
