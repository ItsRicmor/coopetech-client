import environment from 'environment';
import CategoryModel from '../models/categories/CategoryModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestProducts() {
  const endpoint = environment.api.categories.replace(':id', '');

  return EffectUtility.getToModel(CategoryModel, endpoint);
}
