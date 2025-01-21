'use client';

import { useFormContext, Controller, Control } from 'react-hook-form';
import FieldWrapper from '../field-wrapper';
import Editor from '.';

type EditorFieldProps = {
  label: string;
  name: string;
  containerClassName?: string;
  required?: boolean;
  className?: string;
  control?: Control<any, any>;
};

const EditorField = ({
  label,
  name,
  required,
  containerClassName,
  control: CustomControl,
  ...props
}: EditorFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={CustomControl ?? control}
      name={name}
      rules={{
        required: required && 'Campo obrigatorio*',
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <Editor {...props} {...field} />
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

export default EditorField;
