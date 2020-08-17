import React from 'react';
import { Field } from 'formik';

interface Props {
  name: string;
}

const FormikInputView: React.FC<Props> = ({ name, children }) => {
  return <Field name={name}>{children}</Field>;
};

export default FormikInputView;
