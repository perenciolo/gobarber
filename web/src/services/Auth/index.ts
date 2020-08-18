import api from '../api';
import { SignInCredentials } from '../../domains/SignInCredentials';

export async function signIn({ email, password }: SignInCredentials) {
  try {
    const response = await api.post('sessions', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.message || 'Unexpected error try again';
  }
}
