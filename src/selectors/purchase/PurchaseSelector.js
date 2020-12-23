import { createSelector } from 'reselect';

class PurchaseSelector {
  static selectPurchases = (purchases) => {
    return purchases;
  };

  static selectPurchaseToTable = (purchases) => {
    return PurchaseSelector._createTableRows(PurchaseSelector._sortByDateDESC(purchases));
  };

  static _sortByDateDESC = (purchases = []) => {
    let array = [...purchases];
    array.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return array;
  };

  static _sortByDateASC = (purchases = []) => {
    let array = [...purchases];
    array.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    return array;
  };

  static _createTableRows = (models) => {
    return models.map(({ product, ...model }) => ({
      id: model.id,
      description: model.description,
      quantity: model.quantity,
      total: `₡ ${model.total}`,
      //    product: product.name,
    }));
  };
}

export default PurchaseSelector;

export const selectPurchaseToTable = createSelector((state) => state.purchases.items, PurchaseSelector.selectPurchaseToTable);
export const selectPurchases = createSelector((state) => state.purchases.items, PurchaseSelector.selectPurchases);
