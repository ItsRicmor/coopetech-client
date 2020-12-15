import React from 'react';
import { useLoadCategories, useLoadBrands } from '../../hooks';
import FormProductContainer from './forms/FormProductContainer';

const CreateProductContainer = () => {
  const isLoadCategories = useLoadCategories();
  const isLoadBrands = useLoadBrands();
  return <FormProductContainer isloading={isLoadCategories && isLoadBrands} />;
};

export default CreateProductContainer;
