import environment from 'environment';
import PurchaseModel from '../models/purchases/PurchaseModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestPurchases() {
  const endpoint = environment.api.purchases.replace(':id', '');
  return EffectUtility.getToModel(PurchaseModel, endpoint);
}

export async function requestCreatePurchase(purchase) {
  const endpoint = environment.api.purchases.replace(':id', '');
  return EffectUtility.postToModel(PurchaseModel, endpoint, purchase);
}

export async function requestDeletePurchase(id) {
  const endpoint = environment.api.purchases.replace(':id', id);
  return EffectUtility.deleteToModel(PurchaseModel, endpoint);
}

export async function requestUpdatePurchase(purchase) {
  const endpoint = environment.api.purchases.replace(':id', purchase.id);
  return EffectUtility.putToModel(ProductModel, endpoint, purchase);
}

export async function requestPurchaseById(id) {
  const endpoint = environment.api.purchases.replace(':id', id);
  return EffectUtility.getToModel(PurchaseModel, endpoint);
}
