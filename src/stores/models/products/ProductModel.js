import { BaseModel } from 'sjs-base-model';
import CategoryModel from '../categories/CategoryModel';
import BrandModel from '../brands/BrandModel';

export default class ProductModel extends BaseModel {
  id = '';
  description = '';
  quantity = 0;
  price = 0.0;
  brand_id = 0;
  brand = BrandModel;
  category_id = 0;
  category = CategoryModel;
  created_at = '';
  updated_at = '';

  constructor(data = {}) {
    super();
    if (!Object.keys(data).length) {
      this.id = null;
    }
    this.update(data);
  }
}
