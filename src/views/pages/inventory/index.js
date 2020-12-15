import React from 'react';
import InventoryTable from './InventoryTable';
import { useSelector } from 'react-redux';
import { selectProductsToTable } from '../../../selectors/products/ProductsSelector';
import { useLoadProducts } from '../../hooks';
import Loader from '../../components/common/Loader';

const AllManagement = () => {
  const isLoadProduct = useLoadProducts();
  const products = useSelector(selectProductsToTable);

  return isLoadProduct ? <Loader /> : <InventoryTable items={products} />;
};

export default React.memo(AllManagement);
