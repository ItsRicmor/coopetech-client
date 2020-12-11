import * as CategoriesAction from './CategoriesAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const productReducer = baseReducer(initialState, {
  [CategoriesAction.REQUEST_CATEGORIES_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
});

export default productReducer;
