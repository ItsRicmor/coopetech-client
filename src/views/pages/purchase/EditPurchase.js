import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoadProducts, useSelectPurchasesById } from '../../hooks';
import * as ErrorsAction from '../../../stores/error/ErrorAction';

import RouteMap from '../../../constants/RouteMap';
import FormPurchaseContainer from './form/FormPurchaseContainer';

const CreateProductContainer = ({
  match: {
    params: { id },
  },
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoadProducts = useLoadProducts();
  const [isRequesting, purchase, hasErrors] = useSelectPurchasesById(id);

  const isLoading = isLoadProducts || isRequesting;

  useEffect(() => {
    if (hasErrors) {
      history.push(RouteMap.Purchase.root);
      dispatch(ErrorsAction.clearAll());
    }
  }, [dispatch, hasErrors, history]);

  return <FormPurchaseContainer isloading={isLoading} defaultItem={purchase} />;
};

export default CreateProductContainer;
