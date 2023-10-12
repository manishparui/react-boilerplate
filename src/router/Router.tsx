import React from 'react';
import { Routes } from 'react-router-dom';
import RouteRenderer from './RouteRenderer';
import routes, { IRoute } from './routes';

const Router = (): JSX.Element => (
  <Routes>{routes.map((route: IRoute) => RouteRenderer(route))}</Routes>
);

export default Router;
