import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardFooter, CardHeader, Form, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faSpinner, faArrowLeft, faSave, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import * as PurchaseAction from '../../../../stores/purchases/PurchaseAction';

import { selectProductsToOptions } from '../../../../selectors/products/ProductsSelector';
import { useIsRequesting, useHasErrors } from '../../../hooks';
import RouteMap from '../../../../constants/RouteMap';
import { delay } from '../../../../utilities/utils';

import Flex from '../../../components/common/Flex';
import ButtonIcon from '../../../components/common/ButtonIcon';
import { InputForm, CreatableSelectInputForm } from '../../../components/forms/inputs';
import { PurchaseContext } from '../../../context';

const PurchaseForm = ({ isUpdate }) => {
  const [sent, setSent] = useState(false);
  const { item, handleItemChange } = useContext(PurchaseContext);
  const history = useHistory();
  const dispatch = useDispatch();

  const productsOptions = useSelector(selectProductsToOptions);

  const isRequesting = useIsRequesting([PurchaseAction.REQUEST_PURCHASES_CREATE, PurchaseAction.REQUEST_PURCHASES_UPDATE]);

  const isCreatingProduct = useIsRequesting([PurchaseAction.REQUEST_PURCHASES_CREATE]);

  const hasErrors = useHasErrors([PurchaseAction.REQUEST_PURCHASES_CREATE_FINISHED, PurchaseAction.REQUEST_PURCHASES_UPDATE_FINISHED]);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    (async () => {
      if (sent && !hasErrors) {
        await delay();
        history.push(RouteMap.Purchase.root);
      } else {
        if (sent) {
          setSent(false);
        }
      }
    })();
  }, [hasErrors, sent, history]);

  const onSubmitData = async () => {
    if (!isUpdate) {
      dispatch(PurchaseAction.createPurchase(item));
    } else {
      dispatch(PurchaseAction.updatePurchase(item));
    }
    setSent(true);
  };

  const callback = (name) => (id = false) => {
    if (id) {
      handleItemChange({ name, value: id });
    }
  };

  const handlePurchaseCreateOption = async (value) => {
    dispatch(PurchaseAction.createPurchase({ name: value }, callback('product_id')));
  };

  const { description, quantity, total, product_id } = item;

  return (
    <Card tag={Form} onSubmit={handleSubmit(onSubmitData)} className="shadow-sm">
      <CardHeader>
        <Row>
          <Col className="d-flex justify-content-center">
            <h5>{isUpdate ? 'Actualizando' : 'Creando'} una compra</h5>
          </Col>
        </Row>
      </CardHeader>
      <CardBody className="fs--1 font-weight-normal px-md-6 pt-4 pb-3">
        <Row form>
          <Col sm={6} md={6} lg={4}>
            <InputForm
              label="descripción"
              name="description"
              value={description}
              disabled={isUpdate}
              placeholder="Descripcion de la compra"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <InputForm
              label="Cantidad de productos"
              type="number"
              value={quantity}
              name="quantity"
              placeholder="Cantidad del producto"
              min={0}
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <InputForm
              label="Total"
              name="total"
              value={total}
              placeholder="Total"
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <CreatableSelectInputForm
              label="Producto"
              type="select"
              name="product_id"
              value={productsOptions.filter((x) => x.value === product_id)[0]}
              placeholder="Seleccioné un producto"
              onChange={handleItemChange}
              options={productsOptions}
              errors={errors}
              onCreateOption={handlePurchaseCreateOption}
              isLoading={isCreatingProduct}
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
            <ButtonIcon icon={faArrowLeft} className="m-1 shadow-sm" onClick={() => history.goBack()}>
              Volver
            </ButtonIcon>
            <ButtonIcon
              icon={isRequesting ? faSpinner : sent ? faCheckCircle : faSave}
              spin={isRequesting}
              disabled={sent}
              className="m-1 shadow-sm"
              color="success"
              type="submit"
            >
              {isUpdate ? 'Actualizar compra' : 'Crear compra'}
            </ButtonIcon>
          </Flex>
        </Row>
      </CardFooter>
    </Card>
  );
};

PurchaseForm.propTypes = {
  isUpdate: PropTypes.bool,
};

PurchaseForm.defaultProps = {
  isUpdate: false,
};

export default PurchaseForm;
