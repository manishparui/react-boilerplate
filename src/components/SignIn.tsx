import {
  Box,
  Heading,
  Input,
  Button,
  Text,
  FormErrorMessage,
  FormLabel,
  FormControl
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useUser } from '../redux/slice/userSlice';
import SignOut from './SignOut';

const SignIn = (): JSX.Element => {
  const { signIn } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const signInHandler = ({ username, password }: { username: string; password: string }) => {
    // console.log({ username, password });
    signIn({ username, accessToken: username + password });
  };

  return (
    <Box w="400px" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Heading as="h2" size={'lg'} textAlign="center" mb="4">
        Sign in
      </Heading>
      <form onSubmit={handleSubmit((data) => signInHandler(data))}>
        <FormControl isInvalid={Boolean(errors.username)}>
          <FormLabel htmlFor="name">Username</FormLabel>
          <Input
            placeholder="username"
            {...register('username', {
              required: 'This is required',
              minLength: { value: 6, message: 'Minimum length should be 6' }
            })}
          />
          <FormErrorMessage>{errors?.username && errors?.username?.message}</FormErrorMessage>
        </FormControl>

        <FormControl marginTop={3} isInvalid={Boolean(errors.password)}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            placeholder="password"
            {...register('password', {
              required: 'This is required',
              minLength: { value: 6, message: 'Minimum length should be 6' }
            })}
          />
          <FormErrorMessage>{errors?.password && errors?.password?.message + ''}</FormErrorMessage>
        </FormControl>

        <Box textAlign={'center'}>
          <Button mt={3} colorScheme="teal" isLoading={isSubmitting} type="submit">
            Sign In
          </Button>
          <SignOut />
        </Box>
      </form>
      <Text mt="3" textAlign="center">
        Do not have an account? <a href="/signup">Sign up</a>
      </Text>
    </Box>
  );
};

export default SignIn;
