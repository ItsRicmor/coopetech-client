import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Utils from '../../utilities/utils';
import * as ProductsAction from '../../stores/products/ProductsAction';
import { selectProducts } from '../../selectors/products/ProductsSelector';
import useIsRequesting from './useIsRequesting';
import useHasErrors from './useHasErrors';

const useSelectProductById = (id) => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const isRequesting = useIsRequesting([ProductsAction.REQUEST_PRODUCTS_BY_ID]);
  const hasErrors = useHasErrors([ProductsAction.REQUEST_PRODUCTS_BY_ID]);

  useEffect(() => {
    if (Utils.isIterableArray(products)) {
      const [productFounded = false] = products.filter((item) => item.id === id);
      if (productFounded) {
        setProduct(productFounded);
      }
    } else {
      dispatch(ProductsAction.getProductById(id));
    }
  }, [dispatch, id, products]);

  return [isRequesting, product, hasErrors];
};

export default useSelectProductById;
