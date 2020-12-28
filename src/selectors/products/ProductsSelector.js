import { createSelector } from 'reselect';

class ProductsSelector {
  static selectProducts = (products) => {
    return products;
  };

  static selectProductsToTable = (products) => {
    return ProductsSelector._createTableRows(ProductsSelector._sortByDateDESC(products));
  };

  static _sortByDateDESC = (products = []) => {
    let array = [...products];
    array.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return array;
  };

  static _sortByDateASC = (products = []) => {
    let array = [...products];
    array.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return array;
  };

  static _createTableRows = (models) => {
    return models.map(({ category, brand, ...model }) => ({
      id: model.id,
      description: model.description,
      quantity: model.quantity,
      price: `₡ ${model.price}`,
      brand: brand.name,
      category: category.name,
    }));
  };

  static selectProductsToOptions = (products) => {
    return ProductsSelector._productsToOptionRows(products);
  };

  static _productsToOptionRows = (models) => {
    return models.map(({ description, id }) => {
      return {
        value: id,
        label: description,
      };
    });
  };
}

export default ProductsSelector;

export const selectProductsToTable = createSelector((state) => state.products.items, ProductsSelector.selectProductsToTable);
export const selectProducts = createSelector((state) => state.products.items, ProductsSelector.selectProducts);
export const selectProductsToOptions = createSelector((state) => state.products.items, ProductsSelector.selectProductsToOptions);
