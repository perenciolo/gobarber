import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '~/pages/Signin';
import Signup from '~/pages/Signup';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" exact component={Signup} />
      <Route path="/profile" exact isPrivate component={Profile} />
      <Route path="/dashboard" exact isPrivate component={Dashboard} />
      <Route path="/" component={() => <h1>Error 404. Not Found!</h1>} />
    </Switch>
  );
}
