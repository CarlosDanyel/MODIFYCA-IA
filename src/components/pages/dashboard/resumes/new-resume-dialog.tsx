"use client";

import { Button } from "@/components/ui/button";
import { Dialog, BaseDiaploProps } from "@/components/ui/dialog";
import InputField from "@/components/ui/input/field";
import { useForm, FormProvider } from "react-hook-form";

type FormDataprops = {
  title: string;
};

const NewResumeDialog = (props: BaseDiaploProps) => {
  const methods = useForm<FormDataprops>();

  const onSubmit = () => {};

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col "
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Titulo" name="title" required />
            <Button type="submit" className="w-max mt-6 ml-auto">
              Criar currículo
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};

export default NewResumeDialog;
