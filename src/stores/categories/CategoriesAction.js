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

export function createCategory(category, callback = (id) => ({ id })) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES_CREATE, CategoriesEffect.requestCreateCategory, category);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Categoría agregada', ToastStatusEnum.Success));
      callback(response.id);
    } else {
      callback(false);
    }
  };
}

export const REQUEST_CATEGORIES_UPDATE = 'CategoriesAction.REQUEST_CATEGORIES_UPDATE';
export const REQUEST_CATEGORIES_UPDATE_FINISHED = 'CategoriesAction.REQUEST_CATEGORIES_UPDATE_FINISHED';

export function updateCategory(category) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES_UPDATE, CategoriesEffect.requestUpdateCategory, category);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Categoría actualizada', ToastStatusEnum.Success));
    } else {
      dispatch(getCategories());
    }
  };
}

export const REQUEST_CATEGORIES_DELETE = 'CategoriesAction.REQUEST_CATEGORIES_DELETE';
export const REQUEST_CATEGORIES_DELETE_FINISHED = 'CategoriesAction.REQUEST_CATEGORIES_DELETE_FINISHED';

export function deleteCategory(id) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_CATEGORIES_DELETE, CategoriesEffect.requestDeleteCategory, id);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Categoría eliminada', ToastStatusEnum.Success));
    } else {
      dispatch(getCategories());
    }
  };
}
