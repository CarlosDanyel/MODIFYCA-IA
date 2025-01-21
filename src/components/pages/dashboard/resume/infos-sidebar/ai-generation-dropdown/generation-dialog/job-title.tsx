// @flow
import { Button } from '@/components/ui/button';
import EditorField from '@/components/ui/editor/field';
import InputField from '@/components/ui/input/field';
import { ApiServices } from '@/services/api';
import { useMutation } from '@tanstack/react-query';
import * as React from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { toast } from 'sonner';

type FormData = {
  jobtitle: string;
  jobDescription: string;
};

type GenerationData = {
  headline: string;
  summary: string;
  skills: {
    name: string;
    keywords: string;
  }[];
};

type GenerateFromJobTitleProps = {
  onClose: () => void;
};

export const GenerateFromJobTitle = ({
  onClose,
}: GenerateFromJobTitleProps) => {
  const { control, formState, handleSubmit } = useForm<FormData>();
  const { setValue } = useFormContext<ResumeData>();

  const { mutateAsync: handleGenerat } = useMutation({
    mutationFn: ApiServices.generateContentForJob,
  });

  const onSubmit = async (formData: FormData) => {
    const data = await handleGenerat(formData);
    console.log('test', data);

    const generation = JSON.parse(data.data) as GenerationData;

    setValue('content.infos.headline', generation.headline);
    setValue('content.summary', generation.summary);
    setValue('content.skills', generation.skills);

    toast.success('Conteúdo gerado com sucesso!');

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <InputField
        control={control}
        name="jobTitle"
        label="Titulo da vaga"
        placeholder="Desenvolvedor Front-end"
        required
      />
      <EditorField
        control={control}
        name="jobDescription"
        label="Descrição da vaga (Opcional)"
        className="min-h-[200px] max-h-[300px]"
      />

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
