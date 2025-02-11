'use client';

import { Button } from '@/components/ui/button';
import { Dialog, BaseDiaploProps } from '@/components/ui/dialog';
import InputField from '@/components/ui/input/field';
import { createResume } from '@/db/actions';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

type FormDataprops = {
  title: string;
};

const NewResumeDialog = (props: BaseDiaploProps) => {
  const methods = useForm<FormDataprops>();

  const router = useRouter();

  const { mutate: handleCreateResume, isLoading } = useMutation({
    mutationFn: createResume,
    onSuccess: resume => {
      router.push(`/dashboard/resumes/${resume.id}`);
      toast.success('Currículo criado com sucesso');
    },
  });

  const onSubmit = async (data: FormDataprops) => {
    handleCreateResume(data.title);
  };

  return (
    <Dialog
      {...props}
      title="Criar novo currículo"
      description="Para começar, escolha um título para seu currículo"
      className="w-[90%] rounded-lg"
      classNameTitle="text-start"
      content={
        <FormProvider {...methods}>
          <form
            className="flex flex-col  "
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <InputField label="Titulo" name="title" required />
            <Button
              type="submit"
              className="w-max mt-6 ml-auto"
              disabled={isLoading}
            >
              Criar currículo
            </Button>
          </form>
        </FormProvider>
      }
    />
  );
};

export default NewResumeDialog;
