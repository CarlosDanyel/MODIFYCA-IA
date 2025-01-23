// @flow
import { Button } from '@/components/ui/button';

import { ApiServices } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import { mergician } from 'mergician';

type GenerateToFixContentProps = {
  onClose: () => void;
};

export const GenerateToFixContent = ({
  onClose,
}: GenerateToFixContentProps) => {
  const { formState, handleSubmit } = useForm();
  const { getValues, setValue } = useFormContext<ResumeData>();

  const { mutateAsync: handleGenerate } = useMutation({
    mutationFn: ApiServices.fixContent,
  });

  const onSubmit = async () => {
    const content = getValues('content');
    const data = await handleGenerate(content);

    const generation = JSON.parse(data.data);

    const mergedContent = mergician(content, generation) as ResumeContentData;

    setValue('content', mergedContent);

    toast.success('Conteúdo gerado com sucesso!');

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <p>
        Esta funcionalidade aprimora o contéudo atual do currículo e tambem
        corrige possiveis erros gramaticais.
        <strong>Lembre-se de preencher o contéudo antes da geração</strong>
      </p>
      {''}
      <p>Isso pode levar alguns segundos, Aguarde o resultado</p>
      <Button
        className="w-max ml-auto"
        type="submit"
        disabled={formState.isSubmitting}
      >
        Gerar conteúdo
      </Button>
    </form>
  );
};
