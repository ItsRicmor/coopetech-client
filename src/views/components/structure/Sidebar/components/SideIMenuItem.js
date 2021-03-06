import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge } from 'reactstrap';
import Flex from '../../../common/Flex';

const SideMenuItem = ({ route }) => {
  return (
    <Flex align="center">
      {route.icon && (
        <span className="nav-link-icon">
          <FontAwesomeIcon icon={route.icon} />
        </span>
      )}
      <span className="nav-link-text">{route.name}</span>
      {!!route.badge && (
        <Badge color={route.badge.color || 'soft-success'} pill className="ml-2">
          {route.badge.text}
        </Badge>
      )}
    </Flex>
  );
};

SideMenuItem.propTypes = {
  route: PropTypes.shape({
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.object]),
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SideMenuItem;
