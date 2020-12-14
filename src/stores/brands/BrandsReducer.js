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
});

export default brandReducer;
