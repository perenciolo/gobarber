import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  // Redux store selectors.
  const signed = useSelector(state => state.auth.signed);

  // Pass signed boolean to createRouter component.
  const Routes = createRouter(signed);

  return <Routes />;
}
