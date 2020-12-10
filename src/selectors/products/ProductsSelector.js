import { createSelector } from 'reselect';

class ProductSelector {
  static selectProducts(products) {
    return ProductSelector._createTableRows(products);
  }

  static _createTableRows(models) {
    return models.map(({ category, ...model }) => ({
      id: model.id,
      description: model.description,
      quantity: model.quantity,
      price: `₡ ${model.price}`,
      brand: model.brand,
      category: category.name,
    }));
  }
}

export default ProductSelector;

export const selectProducts = createSelector((state) => state.products.items, ProductSelector.selectProducts);
