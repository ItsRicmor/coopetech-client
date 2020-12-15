import { useSelector } from 'react-redux';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';

const useIsRequesting = (actionTypes = []) => {
  const isRequesting = useSelector((state) => selectRequesting(state, actionTypes));
  return isRequesting;
};

export default useIsRequesting;
