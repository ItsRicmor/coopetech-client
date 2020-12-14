import * as BrandsEffect from './BrandsEffect';
import * as ActionUtility from '../../utilities/ActionUtility';
import * as ToastsAction from '../toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export const REQUEST_BRANDS = 'BrandsAction.REQUEST_BRANDS';
export const REQUEST_BRANDS_FINISHED = 'BrandsAction.REQUEST_BRANDS_FINISHED';

export function getBrands() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_BRANDS, BrandsEffect.requestBrands);
  };
}

export const REQUEST_BRANDS_CREATE = 'BrandsAction.REQUEST_BRANDS_CREATE';
export const REQUEST_BRANDS_CREATE_FINISHED = 'BrandsAction.REQUEST_BRANDS_CREATE_FINISHED';

export function createBrand(brand, callback = (id) => ({ id })) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_BRANDS_CREATE, BrandsEffect.requestCreateBrand, brand);
    if (!(response instanceof HttpErrorResponseModel)) {
      callback(response.id);
      dispatch(ToastsAction.add('Marca agregada', ToastStatusEnum.Success));
    } else {
      callback(false);
    }
  };
}
