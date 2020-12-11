import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Form, Row, Col, Button } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import Flex from '../../../components/common/Flex';
import { InputForm, SelectInputForm } from '../../../components/forms/inputs';
import { ProductContext } from '../../../context';

const InventoryForm = (props) => {
  const { item, handleItemChange } = useContext(ProductContext);
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmitData = () => console.log(item);

  const selectOptions = [
    { value: 1, label: 'Cocina' },
    { value: 2, label: 'Taller' },
    { value: 3, label: 'Alojamiento' },
    { value: 4, label: 'Otros' },
  ];

  const { description, quantity, price, brand, category_id } = item;

  return (
    <Card tag={Form} onSubmit={handleSubmit(onSubmitData)} className="shadow-sm">
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
            <InputForm
              label="Código"
              name="id"
              value={description}
              placeholder="Código del producto"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col>
            <InputForm
              label="Descripcion"
              name="description"
              value={description}
              placeholder="Descripción del producto"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col>
            <InputForm
              label="Marca"
              name="brand"
              value={brand}
              placeholder="Marca del producto"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
        </Row>
        <Row form>
          <Col>
            <InputForm
              label="Cantidad"
              type="number"
              value={quantity}
              name="quantity"
              placeholder="Descripción del producto"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col>
            <InputForm
              label="Precio por unidad"
              type="number"
              name="price"
              value={price}
              placeholder="Descripción del producto"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col>
            <SelectInputForm
              label="Categoría"
              type="select"
              name="category_id"
              value={selectOptions.filter((x) => x.value === category_id)[0]}
              placeholder="Seleccioné una categoría"
              onChange={handleItemChange}
              options={selectOptions}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
        </Row>
      </CardBody>
      <CardFooter className="px-md-6 bg-light">
        <Row form>
          <Flex tag={Col} justify="center" className="justify-content-md-end">
            <Button className="m-1 shadow-sm" onClick={() => history.goBack()}>
              Volver
            </Button>
            <Button className="m-1 shadow-sm" color="success" type="submit">
              Crear Producto
            </Button>
          </Flex>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default InventoryForm;
