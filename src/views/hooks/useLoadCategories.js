import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as CategoriesAction from '../../stores/categories/CategoriesAction';
import useIsRequesting from './useIsRequesting';

const useLoadCategories = () => {
  const dispatch = useDispatch();
  const isRequesting = useIsRequesting([CategoriesAction.REQUEST_CATEGORIES]);
  useEffect(() => {
    dispatch(CategoriesAction.getCategories());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadCategories;
