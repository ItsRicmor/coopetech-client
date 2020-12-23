import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as PurchaseAction from '../../stores/purchases/PurchaseAction';
import useIsRequesting from './useIsRequesting';

const useLoadPurchases = () => {
  const dispatch = useDispatch();
  const isRequesting = useIsRequesting([PurchaseAction.REQUEST_PURCHASES]);
  useEffect(() => {
    dispatch(PurchaseAction.getPurchases());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadPurchases;
