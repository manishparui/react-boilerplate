import { Link } from 'react-router-dom';
import { Center, Heading, Text, Button } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

const NotFound = (): JSX.Element => {
  return (
    <Center height="100vh" flexDirection="column">
      <Heading fontSize="4xl">404 - Not Found</Heading>
      <Text fontSize="xl" mt={4}>
        The page you are looking for does not exist.
      </Text>
      <Button as={Link} to="/" colorScheme="teal" mt={8} leftIcon={<FaHome />}>
        Go to Home
      </Button>
    </Center>
  );
};

export default NotFound;
