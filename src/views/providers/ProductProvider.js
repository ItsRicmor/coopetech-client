import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../context';
import ProductModel from '../../stores/models/products/ProductModel';

const { Provider } = ProductContext;

const ProductProvider = ({ children, defaultItem }) => {
  const [item, setItem] = useState(defaultItem || new ProductModel());

  useEffect(() => {
    if (defaultItem) {
      setItem(defaultItem);
    }
  }, [defaultItem]);

  const handleItemChange = ({ value, name }) => setItem({ ...item, [name]: value });

  const value = { item, handleItemChange };

  return <Provider value={value}>{children}</Provider>;
};

ProductProvider.propTypes = {
  defaultItem: PropTypes.object,
};

ProductProvider.defaultProps = {
  defaultItem: null,
};

export default ProductProvider;
