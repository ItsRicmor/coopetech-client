import React from 'react';
import { FormContainer } from '../../components/forms';
import Loader from '../../components/common/Loader';
import ProductProvider from '../../providers/ProductProvider';
import { useLoadCategories, useLoadBrands } from '../../../utilities/hooks';
import InventoryForm from './forms/InventoryForm';

const CreateProductContainer = () => {
  const isLoadCategories = useLoadCategories();
  const isLoadBrands = useLoadBrands();
  return isLoadCategories && isLoadBrands ? (
    <Loader />
  ) : (
    <FormContainer>
      <ProductProvider>
        <InventoryForm />
      </ProductProvider>
    </FormContainer>
  );
};

export default CreateProductContainer;
