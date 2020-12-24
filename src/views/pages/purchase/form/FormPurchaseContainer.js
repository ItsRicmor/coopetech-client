import React from 'react';
import PropTypes from 'prop-types';
import { FormContainer } from '../../../components/forms';
import Loader from '../../../components/common/Loader';
import PurchaseProvider from '../../../providers/PurchaseProvider';
import PurchaseForm from './PurchaseForm';

const FormPurchaseContainer = ({ defaultItem, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    <FormContainer>
      <PurchaseProvider defaultItem={defaultItem}>
        <PurchaseForm isUpdate={!!defaultItem} />
      </PurchaseProvider>
    </FormContainer>
  );
};

FormPurchaseContainer.propTypes = {
  defaultItem: PropTypes.object,
  isLoading: PropTypes.bool,
};

FormPurchaseContainer.defaultProps = {
  defaultItem: null,
  isLoading: false,
};

export default FormPurchaseContainer;
