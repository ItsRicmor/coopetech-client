import { useEffect } from 'react';
import * as CategoriesAction from '../../stores/categories/CategoriesAction';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import { useSelector, useDispatch } from 'react-redux';

const useLoadCategories = () => {
  const dispatch = useDispatch();
  const isRequesting = useSelector((state) => selectRequesting(state, [CategoriesAction.REQUEST_CATEGORIES]));
  useEffect(() => {
    dispatch(CategoriesAction.getCategories());
  }, [dispatch]);
  return isRequesting;
};

export default useLoadCategories;
