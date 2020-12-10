import React, { useContext } from 'react';
import { Button, Navbar } from 'reactstrap';
import AppContext from '../../../context';
import './navbar.scss';

const NavbarContainer = () => {
  const { toggleMenuSidebar } = useContext(AppContext);
  return (
    <Navbar dark className="sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
        Coopetech RL
      </a>
      <Button
        onClick={toggleMenuSidebar}
        className="navbar-toggler position-absolute d-md-none"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap">
          <a className="nav-link" href="#">
            Sign out
          </a>
        </li>
      </ul>
    </Navbar>
  );
};

export default NavbarContainer;
