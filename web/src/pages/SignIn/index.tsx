import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { Container, Content, Background } from './styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import FormikInput from '../../components/FormikInput/FormikInput';

const SignIn: React.FC = () => {
  const SignInSchema = Yup.object().shape({
    email: Yup.string().trim().email().required('Field email is required'),
    password: Yup.string().trim().required('Field password is required'),
  });
  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={SignInSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log('chegou aqui');
              actions.setSubmitting(false);
            }, 500);
          }}
        >
          {({ setFieldTouched, isValid, isSubmitting }: FormikProps<any>) => {
            return (
              <Form>
                <h1>Faça seu login</h1>
                <FormikInput
                  name="email"
                  type="text"
                  placeholder="E-mail"
                  icon={FiMail}
                  onFocus={() => setFieldTouched('email', true)}
                  onBlur={() => setFieldTouched('email', false)}
                />
                <FormikInput
                  name="password"
                  type="password"
                  placeholder="Senha"
                  icon={FiLock}
                  onFocus={() => setFieldTouched('password', true)}
                  onBlur={() => setFieldTouched('password', false)}
                />
                <Button
                  type="submit"
                  disabled={!isValid}
                  loading={isSubmitting}
                >
                  Entrar
                </Button>
                <a href="forgot">Esqueci minha senha</a>
              </Form>
            );
          }}
        </Formik>
        <a href="signup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
export default SignIn;
