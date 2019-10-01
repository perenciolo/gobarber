import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';

import { Container } from './styles';

import AvatarInput from '~/components/AvatarInput';
/*
const schema = {
   name: Yup.string().required('Por favor forneça um nome.'),
  email: Yup.email('Por favor forneça um e-mail válido.').required(
    'Por favor forneça um e-mail.'
  ),
  oldPassword: Yup.string(),
  password: Yup.string().min(8),
  passwordConfirm: Yup.string().min(8),
};
 */

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu E-mail" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Sua nova senha" />
        <Input
          name="passwordConfirm"
          type="password"
          placeholder="Confirme sua nova senha"
        />
        <button type="submit">Atualizar perfil</button>
      </Form>
      <button type="button" onClick={handleSignOut}>
        Sair do GoBarber
      </button>
    </Container>
  );
}
