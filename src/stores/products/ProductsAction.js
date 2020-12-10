import * as ProductsEffect from './ProductsEffect';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REQUEST_PRODUCTS = 'ProductsAction.REQUEST_PRODUCTS';
export const REQUEST_PRODUCTS_FINISHED = 'ProductsAction.REQUEST_PRODUCTS_FINISHED';

export function getProducts() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PRODUCTS, ProductsEffect.requestProducts);
  };
}
