import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container } from 'reactstrap';

const Section = ({ fluid, className, children, ...rest }) => {
  const bgProps = { image, overlay, position, video };
  bgClassName && (bgProps.className = bgClassName);

  return (
    <section className={classNames('bg-light', className)} {...rest}>
      <Container fluid={fluid}>{children}</Container>
    </section>
  );
};

Section.propTypes = {
  fluid: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  fluid: false,
};

export default Section;
