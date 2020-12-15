import * as BrandsAction from './BrandsAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const brandReducer = baseReducer(initialState, {
  [BrandsAction.REQUEST_BRANDS_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
  [BrandsAction.REQUEST_BRANDS_CREATE_FINISHED](state, action) {
    const brand = action.payload;
    return {
      ...state,
      items: [brand, ...state.items],
    };
  },
  [BrandsAction.REQUEST_BRANDS_UPDATE_FINISHED](state, action) {
    const product = action.payload;
    return {
      ...state,
      items: [product, ...state.items.filter((item) => item.id !== product.id)],
    };
  },
  [BrandsAction.REQUEST_BRANDS_DELETE_FINISHED](state, action) {
    const { id } = action.payload;
    return {
      ...state,
      items: [...state.items.filter((item) => item.id !== id)],
    };
  },
});

export default brandReducer;
