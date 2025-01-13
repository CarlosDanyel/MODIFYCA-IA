'use client';

import { useFormContext, Controller } from 'react-hook-form';
import FieldWrapper from '../field-wrapper';
import { Slider } from '.';

type SliderFieldProps = {
  name: string;
  containerClassName?: string;
  label: string;
  required?: boolean;
};

export const SliderField = ({
  name,
  containerClassName,
  label,
  required,
}: SliderFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={1}
      rules={{
        required: required && 'Campo obrigatório',
      }}
      render={({ field, fieldState }) => (
        <FieldWrapper label={label} className={containerClassName}>
          <div className="flex items-center gap-4">
            <Slider
              step={1}
              defaultValue={[1]}
              min={0}
              max={5}
              value={[field.value]}
              onValueChange={value => field.onChange(value[0])}
            />
            <p className="font-bold ">
              {field.value === 0 ? 'Oculto' : field.value}
            </p>
          </div>
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
