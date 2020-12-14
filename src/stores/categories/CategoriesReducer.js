import * as CategoriesAction from './CategoriesAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const categoriesReducer = baseReducer(initialState, {
  [CategoriesAction.REQUEST_CATEGORIES_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
  [CategoriesAction.REQUEST_CATEGORIES_CREATE_FINISHED](state, action) {
    const categories = action.payload;
    return {
      ...state,
      items: [categories, ...state.items],
    };
  },
});

export default categoriesReducer;
