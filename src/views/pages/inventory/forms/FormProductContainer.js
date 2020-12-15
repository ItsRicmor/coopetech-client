import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from '../../../components/forms';
import Loader from '../../../components/common/Loader';
import ProductProvider from '../../../providers/ProductProvider';
import InventoryForm from './InventoryForm';

const FormProductContainer = ({ defaultItem, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <FormContainer>
      <ProductProvider defaultItem={defaultItem}>
        <InventoryForm isUpdate={!!defaultItem} />
      </ProductProvider>
    </FormContainer>
  );
};

FormProductContainer.propTypes = {
  defaultItem: PropTypes.object,
  isLoading: PropTypes.bool,
};

FormProductContainer.defaultProps = {
  defaultItem: null,
  isLoading: false,
};

export default FormProductContainer;
