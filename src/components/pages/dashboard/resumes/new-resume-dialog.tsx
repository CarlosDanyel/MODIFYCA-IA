'use client';

import { Button } from '@/components/ui/button';
import { Dialog, BaseDiaploProps } from '@/components/ui/dialog';
import InputField from '@/components/ui/input/field';
import { createResume } from '@/db/actions';
import { useRouter } from 'next/navigation';
import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'sonner';

type FormDataprops = {
  title: string;
};

const NewResumeDialog = (props: BaseDiaploProps) => {
  const methods = useForm<FormDataprops>();

  const router = useRouter();

  const onSubmit = async (data: FormDataprops) => {
    try {
      const resume = await createResume(data.title);
      toast.success('Currículo criado com sucesso');
      router.push(`/dashboard/resumes/${resume.id}`);
    } catch (error) {
      console.error(error);
      toast.error('Error ao criar currículo, tente novamente');
    }
  };

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
