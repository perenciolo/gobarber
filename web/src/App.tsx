import React from 'react';

import AppProvider from './hooks/GlobalProvider';

import GlobalStyle from './styles/global';

import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
}

export default App;
