import React, { useContext, useEffect, useState } from 'react';
import SideMenuItem from './SideIMenuItem';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Nav, NavItem, NavLink as BootstrapNavLink } from 'reactstrap';

const SideMenu = ({ routes = [], location }) => {
  const [openedIndex, setOpenedIndex] = useState(null);

  useEffect(() => {
    let openedDropdown = null;
    routes.forEach((route, index) => {
      if (location.pathname.indexOf(route.to) === 0) openedDropdown = index;
    });

    setOpenedIndex(openedDropdown);
  }, [location.pathname, routes]);

  const toggleOpened = (e, index) => {
    e.preventDefault();
    return setOpenedIndex(openedIndex === index ? null : index);
  };

  return (
    <ul className="nav flex-column">
      {routes.map((route, index) => {
        if (!route.children) {
          return (
            <NavItem key={index} className="pr-2">
              <NavLink className="nav-link" activeClassName="active" {...route}>
                <SideMenuItem route={route} />
              </NavLink>
            </NavItem>
          );
        }
        return (
          <NavItem key={index} className="pr-2">
            <BootstrapNavLink
              onClick={(e) => toggleOpened(e, index)}
              className="dropdown-indicator cursor-pointer"
              aria-expanded={openedIndex === index}
            >
              <SideMenuItem route={route} />
            </BootstrapNavLink>
            <Collapse isOpen={openedIndex === index}>
              <Nav className="nav-vertial">
                <SideMenu routes={route.children} location={location} />
              </Nav>
            </Collapse>
          </NavItem>
        );
      })}
    </ul>
  );
};

export default withRouter(SideMenu);
