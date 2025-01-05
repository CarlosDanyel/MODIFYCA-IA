"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Switch } from ".";

type SwitchFieldProps = {
  name: string;
  className?: string;
};

const SwitchField = ({ name, className, ...props }: SwitchFieldProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Switch
          className={className}
          {...props}
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
  );
};

export default SwitchField;
