import React from 'react';
import PurchaseTable from './PurchaseTable';
import { useSelector } from 'react-redux';
import { selectPurchaseToTable } from '../../../selectors/purchase/PurchaseSelector';
import { useLoadPurchases, useIsRequesting } from '../../hooks';
import * as PurchaseAction from '../../../stores/purchases/PurchaseAction';
import Loader from '../../components/common/Loader';

const Purchase = () => {
  const isLoadPurchase = useLoadPurchases();
  const isRequesting = useIsRequesting([PurchaseAction.REQUEST_PURCHASES_DELETE]);
  const purchases = useSelector(selectPurchaseToTable);
  console.log(purchases);

  return isLoadPurchase || isRequesting ? <Loader /> : <PurchaseTable items={purchases} />;
};

export default React.memo(Purchase);
