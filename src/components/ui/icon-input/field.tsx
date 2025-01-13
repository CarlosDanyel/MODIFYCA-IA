'use client';

import { useFormContext, Controller } from 'react-hook-form';
import FieldWrapper from '../field-wrapper';
import { IconInput } from '.';

type IconInputFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
};

export const IconField = ({
  label,
  name,
  required,
  containerClassName,
  ...props
}: IconInputFieldProps) => {
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
          <IconInput {...props} {...field} />
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
