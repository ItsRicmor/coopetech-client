import environment from 'environment';
import CategoryModel from '../models/categories/CategoryModel';
import * as EffectUtility from '../../utilities/EffectUtility';

export async function requestCategories() {
  const endpoint = environment.api.categories.replace(':id', '');

  return EffectUtility.getToModel(CategoryModel, endpoint);
}

export async function requestCreateCategory(category) {
  const endpoint = environment.api.categories.replace(':id', '');
  return EffectUtility.postToModel(CategoryModel, endpoint, category);
}

export async function requestUpdateCategory(category) {
  const endpoint = environment.api.categories.replace(':id', category.id);
  return EffectUtility.putToModel(CategoryModel, endpoint, category);
}

export async function requestDeleteProduct(id) {
  const endpoint = environment.api.categories.replace(':id', id);
  return EffectUtility.deleteToModel(CategoryModel, endpoint);
}
