import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

interface IProps {
  children?: JSX.Element;
}

export const Providers = ({ children }: IProps) => {
  const theme = extendTheme({});

  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </Provider>
  );
};
