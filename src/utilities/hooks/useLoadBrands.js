import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as BrandsAction from '../../stores/brands/BrandsAction';
import useIsRequesting from './useIsRequesting';

const useLoadCategories = () => {
  const dispatch = useDispatch();
  const isRequesting = useIsRequesting([BrandsAction.REQUEST_BRANDS]);
  useEffect(() => {
    dispatch(BrandsAction.getBrands());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadCategories;
