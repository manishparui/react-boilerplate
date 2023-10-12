import React, { StrictMode } from 'react';
import { Providers } from './Providers';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App = (): JSX.Element => {
  return (
    <Providers>
      <StrictMode>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </StrictMode>
    </Providers>
  );
};

export default App;
