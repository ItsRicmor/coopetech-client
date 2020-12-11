import { createSelector } from 'reselect';

class ProductsSelector {
  static selectProducts(products) {
    return ProductsSelector._createTableRows(products);
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

export default ProductsSelector;

export const selectProducts = createSelector((state) => state.products.items, ProductsSelector.selectProducts);
