import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import Section from '../common/Section';

const FormContainer = ({ children, Provider }) => (
  <Section className="py-0">
    <Row className="flex-center align-items-start min-vh-75 py-3">
      <Col>
        <Provider>{children}</Provider>
      </Col>
    </Row>
  </Section>
);

FormContainer.propTypes = {
  Provider: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default FormContainer;
