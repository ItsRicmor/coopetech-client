import React from 'react';
import InventoryTable from './InventoryTable';
import { useSelector } from 'react-redux';
import { selectProductsToTable } from '../../../selectors/products/ProductsSelector';
import { useLoadProducts, useIsRequesting } from '../../hooks';
import * as ProductsAction from '../../../stores/products/ProductsAction';
import Loader from '../../components/common/Loader';

const AllManagement = () => {
  const isLoadProduct = useLoadProducts();
  const isRequesting = useIsRequesting([ProductsAction.REQUEST_PRODUCTS_DELETE]);
  const products = useSelector(selectProductsToTable);

  return isLoadProduct || isRequesting ? <Loader /> : <InventoryTable items={products} />;
};

export default React.memo(AllManagement);
