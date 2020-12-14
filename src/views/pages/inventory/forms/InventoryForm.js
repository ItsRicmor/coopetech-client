import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Form, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { faSpinner, faArrowLeft, faSave, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import * as ProductsAction from '../../../../stores/products/ProductsAction';
import * as CategoriesAction from '../../../../stores/categories/CategoriesAction';
import { selectCategoriesToOptions } from '../../../../selectors/categories/CategoriesSelector';
import { useIsRequesting, useHasErrors } from '../../../../utilities/hooks';
import RouteMap from '../../../../constants/RouteMap';
import { delay } from '../../../../utilities/utils';

import Flex from '../../../components/common/Flex';
import ButtonIcon from '../../../components/common/ButtonIcon';
import { InputForm, CreatableSelectInputForm } from '../../../components/forms/inputs';
import { ProductContext } from '../../../context';

const InventoryForm = () => {
  const [sent, setSent] = useState(false);
  const { item, handleItemChange } = useContext(ProductContext);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(item);

  const categoriesOptions = useSelector(selectCategoriesToOptions);

  const isRequesting = useIsRequesting([ProductsAction.REQUEST_PRODUCTS_CREATE]);

  const isCreatingCategory = useIsRequesting([CategoriesAction.REQUEST_CATEGORIES_CREATE]);

  const hasErrors = useHasErrors([ProductsAction.REQUEST_PRODUCTS_CREATE_FINISHED]);

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    (async () => {
      if (sent && !hasErrors) {
        await delay();
        history.push(RouteMap.Inventory.root);
      } else {
        if (sent) {
          setSent(false);
        }
      }
    })();
  }, [hasErrors, sent, history]);

  const onSubmitData = async () => {
    await dispatch(ProductsAction.createProduct(item));
    setSent(true);
  };

  const callback = (name) => (id = false) => {
    if (id) {
      handleItemChange({ name, value: id });
    }
  };

  const handleCategoryCreateOption = async (value) => {
    dispatch(CategoriesAction.createCategory({ name: value }, callback('category_id')));
  };

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
          <Col sm={6} md={6} lg={4}>
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
          <Col sm={6} md={6} lg={4}>
            <InputForm
              label="Descripción"
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
          <Col sm={6} md={6} lg={4}>
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
          <Col sm={6} md={6} lg={4}>
            <InputForm
              label="Cantidad"
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
              label="Precio por unidad"
              type="number"
              name="price"
              value={price}
              placeholder="Precio"
              min={0}
              onChange={handleItemChange}
              errors={errors}
              innerRef={register({
                required: 'Campo obligatorio',
              })}
            />
          </Col>
          <Col sm={6} md={6} lg={4}>
            <CreatableSelectInputForm
              label="Categoría"
              type="select"
              name="category_id"
              value={categoriesOptions.filter((x) => x.value === category_id)[0]}
              placeholder="Seleccioné una categoría"
              onChange={handleItemChange}
              options={categoriesOptions}
              errors={errors}
              onCreateOption={handleCategoryCreateOption}
              isLoading={isCreatingCategory}
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
              Crear Producto
            </ButtonIcon>
          </Flex>
        </Row>
      </CardFooter>
    </Card>
  );
};

export default InventoryForm;
