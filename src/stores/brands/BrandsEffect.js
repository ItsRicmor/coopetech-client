import environment from 'environment';
import BrandModel from '../models/brands/BrandModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestBrands() {
  const endpoint = environment.api.brands.replace(':id', '');

  return EffectUtility.getToModel(BrandModel, endpoint);
}

export async function requestCreateBrand(brand) {
  const endpoint = environment.api.brands.replace(':id', '');
  return EffectUtility.postToModel(BrandModel, endpoint, brand);
}
