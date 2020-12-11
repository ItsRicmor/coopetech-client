import React from 'react';
import InventoryTable from './InventoryTable';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../selectors/products/ProductsSelector';
import { useLoadProducts } from '../../../utilities/hooks';
import Loader from '../../components/common/Loader';

const AllManagement = () => {
  const isLoadProduct = useLoadProducts();
  const products = useSelector(selectProducts);

  return isLoadProduct ? <Loader /> : <InventoryTable items={products} />;
};

export default React.memo(AllManagement);
