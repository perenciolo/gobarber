import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...otherProps } = payload.data;

    const profile = Object.assign(
      { avatar_id, name, email },
      otherProps.oldPassword ? otherProps : {}
    );

    const response = yield call(api.put, `users`, profile);
    toast.success('Perfil atualizado com sucesso.');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar perfil de usuário.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
