import React, { createContext, useCallback, useState, useContext } from 'react';

import * as AuthService from '../../services/Auth';
import { SignInCredentials } from '../../domains/SignInCredentials';

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<null | string>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export enum AuthLocalStorageKeys {
  TOKEN = '@gobarber:token',
  USER = '@gobarber:user',
}

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem(AuthLocalStorageKeys.TOKEN);
    const user = localStorage.getItem(AuthLocalStorageKeys.USER);

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await AuthService.signIn({ email, password });
    if (!response.token || !response.user) {
      return response as string;
    }
    const { token, user } = response;
    localStorage.setItem(AuthLocalStorageKeys.TOKEN, token);
    localStorage.setItem(AuthLocalStorageKeys.USER, JSON.stringify(user));
    setData({ token, user });
    return null;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(AuthLocalStorageKeys.TOKEN);
    localStorage.removeItem(AuthLocalStorageKeys.USER);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
