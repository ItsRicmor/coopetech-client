import { createSelector } from 'reselect';

class BrandsSelector {
  static selectBrands = (categories) => {
    return BrandsSelector._createTableRows(categories);
  };

  static _createTableRows = (models) => {
    return models.map((model) => ({
      id: model.id,
      name: model.name,
    }));
  };

  static selectBrandsToOptions = (categories) => {
    return BrandsSelector._brandsToOptionRows(categories);
  };

  static _brandsToOptionRows = (models) => {
    return models.map(({ name, id }) => {
      return {
        value: id,
        label: name,
      };
    });
  };
}

export default BrandsSelector;

export const selectBrands = createSelector((state) => state.brands.items, BrandsSelector.selectBrands);
export const selectBrandsToOptions = createSelector((state) => state.brands.items, BrandsSelector.selectBrandsToOptions);
