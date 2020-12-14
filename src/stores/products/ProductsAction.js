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

export const REQUEST_PRODUCTS_CREATE = 'ProductsAction.REQUEST_PRODUCTS_CREATE';
export const REQUEST_PRODUCTS_CREATE_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_CREATE_FINISHED';

export function createProduct(product) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_CREATE, ProductsEffect.requestCreateProduct, product);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Producto agregado al invenatrio', ToastStatusEnum.Success));
    }
  };
}
