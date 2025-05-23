'use client';

import { Button } from '@/components/ui/button';
import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { deleteResume } from '@/db/actions';
import { useMutation } from '@tanstack/react-query';

import { useParams, useRouter } from 'next/navigation';

import { useState } from 'react';
import { toast } from 'sonner';

export const DeleteResumeDialog = (props: BaseDiaploProps) => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const router = useRouter();

  const resumeId = params.id as string;

  const { mutate: handleDeleteResume, isLoading } = useMutation({
    mutationFn: deleteResume,
    onSuccess: () => {
      toast.success('Currílo deletado com sucesso!');
      setOpen(false);
      router.push('/dashboard/resumes');
    },
  });

  const onDelete = async () => {
    handleDeleteResume(resumeId);
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
          <Button variant={'secondary'}>Cancelar</Button>
          <Button
            disabled={isLoading}
            variant={'destructive'}
            onClick={onDelete}
          >
            Deletar
          </Button>
        </div>
      }
    />
  );
};
