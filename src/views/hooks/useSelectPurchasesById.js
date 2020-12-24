import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Utils from '../../utilities/utils';
import * as PurchaseAction from '../../stores/purchases/PurchaseAction';
import { selectPurchases } from '../../selectors/purchase/PurchaseSelector';
import useIsRequesting from './useIsRequesting';
import useHasErrors from './useHasErrors';

const useSelectPurchaseById = (id) => {
  const [purchase, setPurchase] = useState({});
  const dispatch = useDispatch();
  const purchases = useSelector(selectPurchases);

  const isRequesting = useIsRequesting([PurchaseAction.REQUEST_PURCHASE_BY_ID]);
  const hasErrors = useHasErrors([PurchaseAction.REQUEST_PURCHASE_BY_ID]);

  useEffect(() => {
    if (Utils.isIterableArray(purchases)) {
      const [purchaseFounded = false] = purchases.filter((item) => item.id === id);
      if (purchaseFounded) {
        setPurchase(purchaseFounded);
      }
    } else {
      dispatch(PurchaseAction.getPurchaseById(id));
    }
  }, [dispatch, id, purchases]);

  return [isRequesting, purchase, hasErrors];
};

export default useSelectPurchaseById;
