import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks/GlobalProvider';

import GlobalStyle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
