import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as ProductsAction from '../../stores/products/ProductsAction';
import useIsRequesting from './useIsRequesting';

const useLoadProducts = () => {
  const dispatch = useDispatch();
  const isRequesting = useIsRequesting([ProductsAction.REQUEST_PRODUCTS]);
  useEffect(() => {
    dispatch(ProductsAction.getProducts());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadProducts;
