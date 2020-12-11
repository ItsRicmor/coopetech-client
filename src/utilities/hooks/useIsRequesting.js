import { useSelector } from 'react-redux';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

const useIsRequesting = (actionTypes = []) => {
  const isError = useSelector((state) => selectRequesting(state, [actionTypes]));
  return isError;
};

export default useIsRequesting;
