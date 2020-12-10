import React, { useEffect } from 'react';
import InventoryTable from './InventoryTable';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts } from '../../../selectors/products/ProductsSelector';
import { selectRequesting } from '../../../selectors/requesting/RequestingSelector';
import * as ProductsAction from '../../../stores/products/ProductsAction';
import Loader from '../../components/common/Loader';

const AllManagement = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isRequesting = useSelector((state) => selectRequesting(state, [ProductsAction.REQUEST_PRODUCTS]));

  useEffect(() => {
    dispatch(ProductsAction.getProducts());
  }, [dispatch]);

  return isRequesting ? <Loader /> : <InventoryTable items={products} />;
};

export default React.memo(AllManagement);
