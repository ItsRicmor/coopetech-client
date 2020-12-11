import * as ProductsEffect from './ProductsEffect';
import * as ActionUtility from '../../utilities/ActionUtility';

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
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS_CREATE, ProductsEffect.requestCreateProduct, product);
  };
}
