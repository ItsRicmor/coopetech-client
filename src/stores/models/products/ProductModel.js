import { BaseModel } from 'sjs-base-model';
import CategoryModel from '../categories/CategoryModel';

export default class ProductModel extends BaseModel {
  id = '';
  description = '';
  quantity = 0;
  price = 0.0;
  brand = '';
  category_id = 0;
  category = CategoryModel;

  constructor(data = {}) {
    super();
    if (!Object.keys(data).length) {
      this.id = null;
    }
    this.update(data);
  }
}
