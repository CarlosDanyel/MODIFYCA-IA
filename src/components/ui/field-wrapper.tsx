import { ReactNode } from "react";
import { Label } from "./label";

type FieldWrapperProps = {
  label: string;
  children: ReactNode;
};

const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  return (
    <div className=" relative flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
};

export default FieldWrapper;
