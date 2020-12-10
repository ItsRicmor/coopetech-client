import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import productsReducer from './products/ProductsReducer';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';

export default function rootReducer(history) {
  const reducerMap = {
    error: errorReducer,
    requesting: requestingReducer,
    router: connectRouter(history),
    toasts: toastsReducer,
    products: productsReducer,
  };

  return combineReducers(reducerMap);
}
