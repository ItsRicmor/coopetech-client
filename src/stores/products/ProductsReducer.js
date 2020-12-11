import * as ProductsAction from './ProductsAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const productReducer = baseReducer(initialState, {
  [ProductsAction.REQUEST_PRODUCTS_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
  [ProductsAction.REQUEST_PRODUCTS_CREATE_FINISHED](state, action) {
    const product = action.payload;
    return {
      ...state,
      items: [product, ...state.items],
    };
  },
});

export default productReducer;
