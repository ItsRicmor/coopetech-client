import React from 'react';
import { FormContainer } from '../../components/forms';
import ProductProvider from '../../providers/ProductProvider';

import InventoryForm from './forms/InventoryForm';

const CreateProductContainer = () => {
  return (
    <FormContainer Provider={ProductProvider}>
      <InventoryForm />
    </FormContainer>
  );
};

export default CreateProductContainer;
