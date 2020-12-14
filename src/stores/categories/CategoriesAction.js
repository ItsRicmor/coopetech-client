import * as CategoriesEffect from './CategoriesEffect';
import * as ActionUtility from '../../utilities/ActionUtility';
import * as ToastsAction from '../toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export const REQUEST_CATEGORIES = 'CategoriesAction.REQUEST_CATEGORIES';
export const REQUEST_CATEGORIES_FINISHED = 'CategoriesAction.REQUEST_CATEGORIES_FINISHED';

export function getCategories() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES, CategoriesEffect.requestCategories);
  };
}

export const REQUEST_CATEGORIES_CREATE = 'CategoriesAction.REQUEST_CATEGORIES_CREATE';
export const REQUEST_CATEGORIES_CREATE_FINISHED = 'CategoriesAction.REQUEST_CATEGORIES_CREATE_FINISHED';

export function createCategory(category, callback) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES_CREATE, CategoriesEffect.requestCreateCategory, category);
    if (!(response instanceof HttpErrorResponseModel)) {
      callback(response.id);
      dispatch(ToastsAction.add('Categoría agregada', ToastStatusEnum.Success));
    }
    callback(false);
  };
}
