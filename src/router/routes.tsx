import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
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
    element: <HomePage />,
    id: 1
  },
  {
    path: 'sign-in',
    element: <SignInPage />,
    id: 1
  },
  {
    path: '*',
    element: <NotFoundPage />,
    id: 1
  }
];

export default routes;
