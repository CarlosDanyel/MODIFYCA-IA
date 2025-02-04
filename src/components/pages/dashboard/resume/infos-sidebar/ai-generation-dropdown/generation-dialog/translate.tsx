/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import { Button } from '@/components/ui/button';
import { ApiServices } from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as React from 'react';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { mergician } from 'mergician';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { toast } from 'sonner';
import { languagesOptions } from '../../../structure-sidebar/sections/language';
import { queyKeys } from '@/constants/querys-keys';

type FormData = {
  language: ResumeLanguages;
};

type GenerateTranslationProps = {
  onClose: () => void;
};

export const GenerateTranslation = ({ onClose }: GenerateTranslationProps) => {
  const {
    control,

    handleSubmit,
    getValues: getFormValues,
  } = useForm<FormData>();
  const { setValue, getValues } = useFormContext<ResumeData>();

  const queryClient = useQueryClient();

  const { mutate: handleGenerate, isLoading } = useMutation({
    mutationFn: ApiServices.traslate,
    onSuccess: data => {
      const content = getValues('content');

      const generation = JSON.parse(data.data);

      const mergedGeneration = mergician(
        content,
        generation
      ) as ResumeContentData;

      const language = getFormValues('language');

      setValue('content', mergedGeneration);
      setValue('structure.language', language);

      toast.success('Conteúdo gerado com sucesso!');

      queryClient.invalidateQueries({ queryKey: queyKeys.credits });

      onClose();
    },
  });

  const onSubmit = async (formData: FormData) => {
    const content = getValues('content');

    const selectedLanguage = languagesOptions.find(
      item => item.value === formData.language
    );

    handleGenerate({
      content,
      language: selectedLanguage?.label!,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <p>
        Esta funcionando traduz o conteúdo atual para a linguagem selecionada
        abaixo.
      </p>
      <p>Isso pode levar alguns segundosm, aguarde o resultado.</p>

      <Controller
        control={control}
        name="language"
        rules={{ required: true }}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecionar linguagem" />
            </SelectTrigger>
            <SelectContent>
              {languagesOptions.map(language => (
                <SelectItem key={language.value} value={language.value}>
                  {language.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Button className="w-max ml-auto" type="submit" disabled={isLoading}>
        Gerar conteúdo
      </Button>
    </form>
  );
};
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>;
