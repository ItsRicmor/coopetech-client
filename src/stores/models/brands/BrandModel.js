import { BaseModel } from 'sjs-base-model';

export default class BrandModel extends BaseModel {
  id = 0;
  name = '';
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
