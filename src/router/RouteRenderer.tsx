import React from 'react';
import { Route } from 'react-router-dom';
import { IRoute } from './routes';

const RouteRenderer = ({ children, id, element, ...props }: IRoute): JSX.Element => {
  if (children) {
    return (
      <Route element={element} key={id} path={props.path}>
        {children.map((route: IRoute) => RouteRenderer(route))}
      </Route>
    );
  }
  return <Route element={element} key={id} {...props} />;
};

export default RouteRenderer;
