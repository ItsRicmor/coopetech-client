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
    const category = action.payload;
    return {
      ...state,
      items: [category, ...state.items],
    };
  },
  [CategoriesAction.REQUEST_CATEGORIES_UPDATE_FINISHED](state, action) {
    const product = action.payload;
    return {
      ...state,
      items: [product, ...state.items.filter((item) => item.id !== product.id)],
    };
  },
  [CategoriesAction.REQUEST_CATEGORIES_DELETE_FINISHED](state, action) {
    const { id } = action.payload;
    return {
      ...state,
      items: [...state.items.filter((item) => item.id !== id)],
    };
  },
});

export default categoriesReducer;
