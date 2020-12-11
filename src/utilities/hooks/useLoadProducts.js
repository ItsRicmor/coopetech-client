import { useEffect } from 'react';
import * as ProductsAction from '../../stores/products/ProductsAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import { useSelector, useDispatch } from 'react-redux';

const useLoadProducts = () => {
  const dispatch = useDispatch();
  const isRequesting = useSelector((state) => selectRequesting(state, [ProductsAction.REQUEST_PRODUCTS]));
  useEffect(() => {
    dispatch(ProductsAction.getProducts());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadProducts;
