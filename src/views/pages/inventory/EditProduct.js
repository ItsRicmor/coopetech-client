import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoadCategories, useLoadBrands, useSelectProductById } from '../../hooks';
import * as ErrorsAction from '../../../stores/error/ErrorAction';

import RouteMap from '../../../constants/RouteMap';
import FormProductContainer from './forms/FormProductContainer';

const CreateProductContainer = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoadCategories = useLoadCategories();
  const isLoadBrands = useLoadBrands();
  const [isRequesting, product, hasErrors] = useSelectProductById(id);

  const isLoading = isLoadCategories || isLoadBrands || isRequesting;

  useEffect(() => {
    if (hasErrors) {
      history.push(RouteMap.Inventory.root);
      dispatch(ErrorsAction.clearAll());
    }
  }, [dispatch, hasErrors, history]);

  return <FormProductContainer isloading={isLoading} defaultItem={product} />;
};

export default CreateProductContainer;
