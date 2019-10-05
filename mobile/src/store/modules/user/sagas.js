import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...otherProps } = payload.data;
    console.tron.log('HI Saga BEFORE|', payload.data);

    const profile = Object.assign(
      { name, email },
      otherProps.oldPassword ? otherProps : {},
    );

    console.tron.log('HI Saga', profile);

    const response = yield call(api.put, `users`, profile);
    Alert.alert('Sucesso', 'Perfil atualizado.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Falha ao atualizar',
      'Erro ao atualizar perfil de usuário. Tente novamente mais tarde.',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
