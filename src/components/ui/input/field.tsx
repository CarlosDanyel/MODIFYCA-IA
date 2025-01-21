'use client';

import { ComponentProps, ReactNode } from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Input } from '.';
import FieldWrapper from '../field-wrapper';

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
  containerClassName?: string;
  extraContent?: (value: string) => ReactNode;
};

const InputField = ({
  label,
  name,

  required,
  containerClassName,
  extraContent,
  ...props
}: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && 'Campo obrigatorio*',
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Input {...props} {...field} value={field.value || ''} />
          {extraContent && extraContent(field.value)}
          {fieldState.error && (
            <p className="absolute text-sm text-red-500 top-16">
              {fieldState.error.message}
            </p>
          )}
        </FieldWrapper>
      )}
    />
  );
};

export default InputField;
