import { BaseModel } from 'sjs-base-model';
import ProductModel from '../products/ProductModel';

export default class PurchaseModel extends BaseModel {
  id = '';
  description = '';
  quantity = 0;
  total = 0.0;
  product_id = 0;
  product = ProductModel;

  constructor(data = {}) {
    super();
    if (!Object.keys(data).length) {
      this.id = null;
    }
    this.update(data);
  }
}
