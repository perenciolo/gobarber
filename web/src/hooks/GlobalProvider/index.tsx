import React from 'react';

import { AuthProvider } from '../Authentication/Authentication';
import { ToastProvider } from '../Toast/Toast';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
