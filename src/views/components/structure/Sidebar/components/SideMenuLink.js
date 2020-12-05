import { NavLink } from 'react-router-dom';
import React from 'react';

export default (props) => {
  return <NavLink exact={true} {...props} className="nav-link" activeClassName="active" />;
};
