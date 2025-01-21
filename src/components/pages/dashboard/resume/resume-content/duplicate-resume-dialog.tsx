'use client';

import { Button } from '@/components/ui/button';
import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { deleteResume } from '@/db/actions';

import { useParams, useRouter } from 'next/navigation';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  title: string;
};

export const DuplicateResumeDialog = (props: BaseDiaploProps) => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();
  const methods = useForm<FormData>();

  const resumeId = params.id as string;

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
      //   await deleteResume(resumeId);
      //   toast.success('Currílo duplicado com sucesso!');
      //   router.push('/dashboard/resumes');
    } catch (error) {
      console.error(error);
      toast.error('Error ao duplicar o currículo, tente novamente mais tarde');
    }
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Duplicar Currículo"
      description="Sera criado um novo currículo com o mesmo conteúdo"
      content={
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Controller
            control={methods.control}
            name="title"
            render={({ field }) => (
              <Input placeholder=" Novo título" {...field} />
            )}
          />

          <div className="flex mt-4 ml-auto gap-4">
            <Button variant={'secondary'}>Cancelar</Button>
            <Button type="submit">Duplicar</Button>
          </div>
        </form>
      }
    />
  );
};
