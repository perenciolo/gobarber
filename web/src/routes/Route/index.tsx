import React from 'react';
import { RouteProps, Route as ReactDomRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../../hooks/Authentication/Authentication';

interface Props extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<Props> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === Boolean(user)) {
          return <Component />;
        }
        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
