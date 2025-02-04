// @flow
import { Button } from '@/components/ui/button';

import { ApiServices } from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import { mergician } from 'mergician';
import { queyKeys } from '@/constants/querys-keys';

type GenerateToFixContentProps = {
  onClose: () => void;
};

export const GenerateToFixContent = ({
  onClose,
}: GenerateToFixContentProps) => {
  const { handleSubmit } = useForm();
  const { getValues, setValue } = useFormContext<ResumeData>();

  const queryClient = useQueryClient();

  const { mutate: handleGenerate, isLoading } = useMutation({
    mutationFn: ApiServices.fixContent,
    onSuccess: data => {
      const content = getValues('content');

      const generation = JSON.parse(data.data);

      const mergedContent = mergician(content, generation) as ResumeContentData;

      setValue('content', mergedContent);

      toast.success('Conteúdo gerado com sucesso!');

      queryClient.invalidateQueries({ queryKey: queyKeys.credits });

      onClose();
    },
  });

  const onSubmit = async () => {
    const content = getValues('content');
    handleGenerate(content);
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
      <Button className="w-max ml-auto" type="submit" disabled={isLoading}>
        Gerar conteúdo
      </Button>
    </form>
  );
};
