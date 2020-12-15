import * as ProductsEffect from './ProductsEffect';
import * as ActionUtility from '../../utilities/ActionUtility';
import * as ToastsAction from '../toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export const REQUEST_PRODUCTS = 'ProductsAction.REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_FINISHED';

export function getProducts() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS, ProductsEffect.requestProducts);
  };
}

export const REQUEST_PRODUCTS_BY_ID = 'ProductsAction.REQUEST_PRODUCTS_BY_ID';
export const REQUEST_PRODUCTS_BY_ID_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_BY_ID_FINISHED';

export function getProductById(id) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_BY_ID, ProductsEffect.requestProductById, id);
  };
}

export const REQUEST_PRODUCTS_CREATE = 'ProductsAction.REQUEST_PRODUCTS_CREATE';
export const REQUEST_PRODUCTS_CREATE_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_CREATE_FINISHED';

export function createProduct(product, callback = (id) => ({ id })) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_UPDATE, ProductsEffect.requestCreateProduct, product);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Producto agregado al invenatrio', ToastStatusEnum.Success));
      callback(response.id);
    } else {
      callback(false);
    }
  };
}

export const REQUEST_PRODUCTS_UPDATE = 'ProductsAction.REQUEST_PRODUCTS_UPDATE';
export const REQUEST_PRODUCTS_UPDATE_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_UPDATE_FINISHED';

export function updateProduct(product) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_UPDATE, ProductsEffect.requestUpdateProduct, product);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Producto actualizado', ToastStatusEnum.Success));
    } else {
      dispatch(getProducts());
    }
  };
}

export const REQUEST_PRODUCTS_DELETE = 'ProductsAction.REQUEST_PRODUCTS_DELETE';
export const REQUEST_PRODUCTS_DELETE_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_DELETE_FINISHED';

export function deleteProduct(id) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_DELETE, ProductsEffect.requestDeleteProduct, id);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Producto eliminado', ToastStatusEnum.Success));
    } else {
      dispatch(getProducts());
    }
  };
}
