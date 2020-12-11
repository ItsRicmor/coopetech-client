import { useSelector } from 'react-redux';
import { hasErrors } from '../../selectors/error/ErrorSelector';

const useHasErrors = (actionTypesFinished = []) => {
  const isError = useSelector((state) => hasErrors(state, [actionTypesFinished]));
  return isError;
};

export default useHasErrors;
