import * as PurchaseAction from './PurchaseAction';
import baseReducer from '../../utilities/BaseReducer';

export const initialState = {
  currentId: 0,
  items: [],
};

const purchaseReducer = baseReducer(initialState, {
  [PurchaseAction.REQUEST_PURCHASES_FINISHED](state, action) {
    return {
      ...state,
      items: action.payload,
    };
  },
  [PurchaseAction.REQUEST_PURCHASES_CREATE_FINISHED](state, action) {
    const purchase = action.payload;
    return {
      ...state,
      items: [purchase, ...state.items],
    };
  },
  [PurchaseAction.REQUEST_PURCHASES_DELETE_FINISHED](state, action) {
    const { id } = action.payload;
    return {
      ...state,
      items: [...state.items.filter((item) => item.id !== id)],
    };
  },
  [PurchaseAction.REQUEST_PURCHASES_DELETE_FINISHED](state, action) {
    const purchase = action.payload;
    return {
      ...state,
      items: [purchase, ...state.items.filter((item) => item.id !== purchase.id)],
    };
  },
  [PurchaseAction.REQUEST_PURCHASE_BY_ID_FINISHED](state, action) {
    const purchase = action.payload;
    return {
      ...state,
      items: [purchase, ...state.items.filter((item) => item.id !== purchase.id)],
    };
  },
});

export default purchaseReducer;
