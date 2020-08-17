import React from 'react';
import { FiLogIn, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { Container, Content, Background } from '../SignIn/styles';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import FormikInput from '../../components/FormikInput/FormikInput';
import signUpbg from '../../assets/signup-bg.png';

const SignUp: React.FC = () => {
  const SignUpSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, 'Field name must have at least 3 characters')
      .required('Field name is required'),
    email: Yup.string().trim().email().required('Field email is required'),
    password: Yup.string().trim().required('Field password is required'),
    password_confirmation: Yup.string()
      .trim()
      .oneOf(
        [Yup.ref('password')],
        'Fields password and password_confirmation must match',
      ),
  });
  return (
    <Container>
      <Background bg={signUpbg} />
      <Content>
        <img src={logo} alt="GoBarber" />
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={SignUpSchema}
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
                <h1>Faça seu cadastro</h1>
                <FormikInput
                  name="name"
                  type="text"
                  placeholder="Nome"
                  icon={FiUser}
                  onFocus={() => setFieldTouched('name', true)}
                  onBlur={() => setFieldTouched('name', false)}
                />
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
                <FormikInput
                  name="password_confirmation"
                  type="password"
                  placeholder="Confirme sua senha"
                  icon={FiLock}
                  onFocus={() => setFieldTouched('password_confirmation', true)}
                  onBlur={() => setFieldTouched('password_confirmation', false)}
                />
                <Button
                  type="submit"
                  disabled={!isValid}
                  loading={isSubmitting}
                >
                  Cadastre-se
                </Button>
              </Form>
            );
          }}
        </Formik>
        <a href="signin">
          <FiLogIn />
          Já possui conta. Faça o login
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;
