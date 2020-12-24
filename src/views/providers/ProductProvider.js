import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ProductContext } from '../context';
import * as ProductsAction from '../../stores/products/ProductsAction';
import * as CategoriesAction from '../../stores/categories/CategoriesAction';
import * as BrandsAction from '../../stores/brands/BrandsAction';
import ProductModel from '../../stores/models/products/ProductModel';
import { useIsRequesting, useHasErrors } from '../hooks';
import RouteMap from '../../constants/RouteMap';
import { delay } from '../../utilities/utils';
import { useHistory } from 'react-router-dom';

const { Provider } = ProductContext;

const ProductProvider = ({ children, defaultItem }) => {
  const [item, setItem] = useState(defaultItem || new ProductModel());
  const [sent, setSent] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();

  const hasErrors = useHasErrors([ProductsAction.REQUEST_PRODUCTS_CREATE_FINISHED, ProductsAction.REQUEST_PRODUCTS_UPDATE_FINISHED]);

  useEffect(() => {
    if (defaultItem) {
      setItem(defaultItem);
    }
  }, [defaultItem]);

  useEffect(() => {
    (async () => {
      if (sent && !hasErrors) {
        await delay();
        history.push(RouteMap.Inventory.root);
      }
    })();
  }, [hasErrors, sent, history]);

  const handleItemChange = ({ value, name }) => setItem({ ...item, [name]: value });

  const validateSentCallback = (id) => {
    setSent(!!id);
  };

  const onSubmitData = async () => {
    if (defaultItem) {
      dispatch(ProductsAction.updateProduct(item, validateSentCallback));
    } else {
      dispatch(ProductsAction.createProduct(item, validateSentCallback));
    }
  };

  const validateCreatedCallback = (name) => (id = false) => {
    if (id) {
      handleItemChange({ name, value: id });
    }
  };

  const handleCategoryCreateOption = async (value) => {
    dispatch(CategoriesAction.createCategory({ name: value }, validateCreatedCallback('category_id')));
  };

  const handleBrandCreateOption = async (value) => {
    dispatch(BrandsAction.createBrand({ name: value }, validateCreatedCallback('brand_id')));
  };

  const value = { item, handleItemChange, onSubmitData, sent, handleCategoryCreateOption, handleBrandCreateOption };

  return <Provider value={value}>{children}</Provider>;
};

ProductProvider.propTypes = {
  defaultItem: PropTypes.object,
};

ProductProvider.defaultProps = {
  defaultItem: null,
};

export default ProductProvider;
