import React, { InputHTMLAttributes } from 'react';

import Input from '../Input/Input';
import FormikInputView from './FormikInputView';
import { FieldProps } from 'formik';
import { IconBaseProps } from 'react-icons/lib';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const FormikInput: React.FC<Props> = ({ name, ...rest }) => {
  return (
    <FormikInputView name={name}>
      {({ field, form, meta }: FieldProps) => {
        console.log();
        return (
          <Input
            {...field}
            isFocused={meta.touched}
            isFilled={form.values[field.name]}
            error={meta.error}
            {...rest}
          />
        );
      }}
    </FormikInputView>
  );
};

export default FormikInput;
