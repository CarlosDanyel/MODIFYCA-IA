"use client";

import { ComponentProps } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from ".";
import FieldWrapper from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
  label: string;
  name: string;
};

const InputField = ({ label, name, required, ...props }: InputFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: required && "Campo obrigatorio*",
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label}>
          <Input {...props} {...field} />
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
