import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authorization, logOut } from '../../features/Login/authReducer';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ authorization, logOut }, dispatch);
};
