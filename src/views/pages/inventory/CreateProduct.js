import React from 'react';
import { FormContainer } from '../../components/forms';
import ProductProvider from '../../providers/ProductProvider';

const CreateProductContainer = () => {
  return <FormContainer Provider={ProductProvider}></FormContainer>;
};

export default CreateProductContainer;
