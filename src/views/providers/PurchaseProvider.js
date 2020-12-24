import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PurchaseContext } from '../context';
import PurchaseModel from '../../stores/models/purchases/PurchaseModel';

const { Provider } = PurchaseContext;

const PurchaseProvider = ({ children, defaultItem }) => {
  const [item, setItem] = useState(defaultItem || new PurchaseModel());

  useEffect(() => {
    if (defaultItem) {
      setItem(defaultItem);
    }
  }, [defaultItem]);

  const handleItemChange = ({ value, name }) => setItem({ ...item, [name]: value });

  const value = { item, handleItemChange };

  return <Provider value={value}>{children}</Provider>;
};

PurchaseProvider.propTypes = {
  defaultItem: PropTypes.object,
};

PurchaseProvider.defaultProps = {
  defaultItem: null,
};

export default PurchaseProvider;
