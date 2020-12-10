import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Form, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../../components/forms';
import { ProductContext } from '../../../context';

const InventoryForm = (props) => {
  const { item } = useContext(ProductContext);
  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmitData = () => console.log(item);

  return (
    <Card tag={Form} onSubmit={handleSubmit()}>
      <CardHeader>
        <Row>
          <Col className="d-flex justify-content-center">
            <h5>Creando un Producto</h5>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="fs--1 font-weight-normal px-md-6 pt-4 pb-3">
        <Row form>
          <Col>
            <InputForm label="Descripcion" name="description" />
          </Col>
        </Row>
        <Row form>
          <Col>
            <InputForm label="Descripcion" name="description" />
          </Col>
        </Row>
        <Row form>
          <Col>
            <InputForm label="Descripcion" name="description" />
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="px-md-6 bg-light"></CardFooter>
    </Card>
  );
};
