import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';
import productsReducer from './products/ProductsReducer';
import categoriesReducer from './categories/CategoriesReducer';
import brandsReducer from './brands/BrandsReducer';

export default function rootReducer(history) {
  const reducerMap = {
    error: errorReducer,
    requesting: requestingReducer,
    router: connectRouter(history),
    toasts: toastsReducer,
    products: productsReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
  };

  return combineReducers(reducerMap);
}
