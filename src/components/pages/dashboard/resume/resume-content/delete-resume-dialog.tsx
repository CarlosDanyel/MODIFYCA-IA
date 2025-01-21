'use client';

import { Button } from '@/components/ui/button';
import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { deleteResume } from '@/db/actions';

import { useParams, useRouter } from 'next/navigation';

import { useState } from 'react';
import { toast } from 'sonner';

export const DeleteResumeDialog = (props: BaseDiaploProps) => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();

  const resumeId = params.id as string;

  const onDelete = async () => {
    try {
      await deleteResume(resumeId);
      toast.success('Currílo deletado com sucesso!');
      router.push('/dashboard/resumes');
    } catch (error) {
      console.error(error);
      toast.error('Error ao deletar o currículo, tente novamente mais tarde');
    }
  };

  return (
    <Dialog
      {...props}
      open={open}
      setOpen={setOpen}
      title="Deletar Currículo"
      description="Você tem certeza que deseja deletar este currículo?"
      content={
        <div className="flex gap-2 ml-auto">
          <Button onClick={() => setOpen(false)}>Cancelar</Button>
          <Button variant={'destructive'} onClick={onDelete}>
            Deletar
          </Button>
        </div>
      }
    />
  );
};
