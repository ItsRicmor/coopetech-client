import * as CategoriesEffect from './CategoriesEffect';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REQUEST_CATEGORIES = 'CategoriesAction.REQUEST_CATEGORIES';
export const REQUEST_CATEGORIES_FINISHED = 'CategoriesAction.REQUEST_CATEGORIES_FINISHED';

export function getCategories() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES, CategoriesEffect.requestProducts);
  };
}
