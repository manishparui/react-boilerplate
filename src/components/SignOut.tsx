import { Button } from '@chakra-ui/react';
import { useUser } from '../redux/slice/userSlice';
import { useAuth } from '../hooks/useAuth';

const SignOut = (): JSX.Element => {
  const { isSignedIn } = useAuth();
  const { signOut } = useUser();
  const signOutHandler = () => {
    signOut();
  };
  return <>{isSignedIn && <Button onClick={signOutHandler}>Sign out</Button>}</>;
};

export default SignOut;
