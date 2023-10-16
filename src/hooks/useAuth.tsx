import { useSelector } from 'react-redux';
import { IState } from '../redux/store';

export const useAuth = (): { isSignedIn: boolean; refreshSession: () => void } => {
  const user = useSelector((state: IState) => state.user);
  const refreshSession = () => {
    console.log('refreshing session');
  };

  return {
    isSignedIn: Boolean(user.accessToken),
    refreshSession
  };
};
