import environment from 'environment';
import ProductModel from '../models/products/ProductModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestProducts() {
  const endpoint = environment.api.products.replace(':id', '');
  return EffectUtility.getToModel(ProductModel, endpoint);
}

export async function requestCreateProduct(product) {
  const endpoint = environment.api.products.replace(':id', '');
  return EffectUtility.postToModel(ProductModel, endpoint, product);
}
