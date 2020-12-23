import React from 'react';
import { useLoadProducts } from '../../hooks';
import FormPurchaseContainer from './form/FormPurchaseContainer';

const CreateProductContainer = () => {
  const isLoadProducts = useLoadProducts();
  return <FormPurchaseContainer isloading={isLoadProducts} />;
};

export default CreateProductContainer;
