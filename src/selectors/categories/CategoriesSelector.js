import { createSelector } from 'reselect';

class CategoriesSelector {
  static selectCategories = (categories) => {
    return CategoriesSelector._createTableRows(categories);
  };

  static _createTableRows = (models) => {
    return models.map((model) => ({
      id: model.id,
      name: model.name,
    }));
  };

  static selectCategoriesToOptions = (categories) => {
    return CategoriesSelector._localsToOptionRows(categories);
  };

  static _localsToOptionRows = (models) => {
    return models.map(({ name, id }) => {
      return {
        value: id,
        label: name,
      };
    });
  };
}

export default CategoriesSelector;

export const selectCategories = createSelector((state) => state.categories.items, CategoriesSelector.selectCategories);
export const selectCategoriesToOptions = createSelector((state) => state.categories.items, CategoriesSelector.selectCategoriesToOptions);
