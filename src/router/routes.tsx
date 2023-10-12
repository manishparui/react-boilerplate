import React from 'react';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignInPage from '../pages/SignInPage';

export interface IRoute {
  path?: string;
  element: JSX.Element;
  children?: IRoute[];
  index?: boolean;
  id: number | string;
}

const routes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
    id: 1
  },
  {
    path: 'sign-in',
    element: <SignInPage />,
    id: 1
  },
  {
    path: '*',
    element: <NotFound />,
    id: 1
  }
];

export default routes;
