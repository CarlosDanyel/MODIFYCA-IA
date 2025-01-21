'use client';

import { Button } from '@/components/ui/button';
import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { RenameResumeTitle } from '@/db/actions';
import { useMutation } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  title: string;
};

export const RenameTitleDialog = (props: BaseDiaploProps) => {
  const params = useParams();
  const [open, setOpen] = useState(false);
  const methods = useForm<FormData>();

  const resumeId = params.id as string;

  const { mutate: handleDuplicateResume, isLoading } = useMutation({
    mutationFn: (title: string) => RenameResumeTitle(resumeId, title),
    onSuccess: () => {
      toast.success('Currículo renomeado com sucesso!');
      setOpen(false);
    },
  });

  const onSubmit = async (data: FormData) => {
    handleDuplicateResume(data.title);
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Renomear Currículo"
      description="Qual o novo nome do currículo?"
      content={
        <form
          className="flex flex-col"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <Controller
            control={methods.control}
            name="title"
            rules={{ required: 'Campo obrigatório' }}
            render={({ field }) => (
              <Input placeholder=" Renomear Currículo" {...field} />
            )}
          />

          <div className="flex mt-4 ml-auto gap-2">
            <Button
              variant={'secondary'}
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button disabled={isLoading} type="submit">
              Renomear
            </Button>
          </div>
        </form>
      }
    />
  );
};
