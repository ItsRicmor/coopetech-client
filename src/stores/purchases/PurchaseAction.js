import * as PurchaseEffect from './PurchaseEffect';
import * as ActionUtility from '../../utilities/ActionUtility';
import * as ToastsAction from '../toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

export const REQUEST_PURCHASES = 'PurchaseAction.REQUEST_PURCHASES';
export const REQUEST_PURCHASES_FINISHED = 'PurchaseAction.REQUEST_PURCHASES_FINISHED';

export function getPurchases() {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PURCHASES, PurchaseEffect.requestPurchases);
  };
}

export const REQUEST_PURCHASES_CREATE = 'PurchaseAction.REQUEST_PURCHASES_CREATE';
export const REQUEST_PURCHASES_CREATE_FINISHED = 'PurchaseAction.REQUEST_PURCHASES_CREATE_FINISHED';

export function createPurchase(purchase, callback = (id) => ({ id })) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PURCHASES_CREATE, PurchaseEffect.requestCreatePurchase, purchase);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Compra creada exitosamente', ToastStatusEnum.Success));
      callback(response.id);
    } else {
      callback(false);
    }
  };
}

export const REQUEST_PURCHASES_DELETE = 'PurchaseAction.REQUEST_PURCHASES_DELETE';
export const REQUEST_PURCHASES_DELETE_FINISHED = 'PurchaseAction.REQUEST_PURCHASES_DELETE_FINISHED';

export function deletePurchases(id) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PURCHASES_DELETE, PurchaseEffect.requestDeletePurchase, id);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Compra eliminada', ToastStatusEnum.Success));
    } else {
      dispatch(getPurchases());
    }
  };
}

export const REQUEST_PURCHASES_UPDATE = 'PurchaseAction.REQUEST_PURCHASES_UPDATE';
export const REQUEST_PURCHASES_UPDATE_FINISHED = 'PurchaseAction.REQUEST_PURCHASES_UPDATE_FINISHED';

export function updatePurchase(product) {
  return async (dispatch, getState) => {
    const response = await ActionUtility.createThunkEffect(dispatch, REQUEST_PURCHASES_UPDATE, PurchaseEffect.requestUpdatePurchase, product);
    if (!(response instanceof HttpErrorResponseModel)) {
      dispatch(ToastsAction.add('Compra actualizado', ToastStatusEnum.Success));
    } else {
      dispatch(getPurchases());
    }
  };
}

export const REQUEST_PURCHASE_BY_ID = 'PurchaseAction.REQUEST_PURCHASE_BY_ID';
export const REQUEST_PURCHASE_BY_ID_FINISHED = 'PurchaseAction.REQUEST_PURCHASE_BY_ID_FINISHED';

export function getPurchaseById(id) {
  return async (dispatch, getState) => {
    await ActionUtility.createThunkEffect(dispatch, REQUEST_PURCHASE_BY_ID, PurchaseEffect.requestPurchaseById, id);
  };
}
