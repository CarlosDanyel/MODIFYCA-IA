import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { JSX } from 'react';
import { GenerateFromJobTitle } from './job-title';
import { GenerateToFixContent } from './fix-content';
import { GenerateTranslation } from './translate';

type GenerationDialogProps = BaseDiaploProps & {
  mode: AiGenerationMode;
  setOpen: (opem: boolean) => void;
};

export const GenerationDialog = ({ mode, ...props }: GenerationDialogProps) => {
  const onClose = () => {
    props.setOpen(false);
  };

  const configPerMode: Record<AiGenerationMode, JSX.Element> = {
    JOB_TITLE: <GenerateFromJobTitle onClose={onClose} />,
    FIX_CONTENT: <GenerateToFixContent onClose={onClose} />,
    TRANSLATE_CONTENT: <GenerateTranslation onClose={onClose} />,
  };

  const content = configPerMode[mode];

  return (
    <Dialog
      {...props}
      title="Inteligência Artíficial"
      description="O conteúdo gerado sobrescreverá os campos existentes. Cada geração custa 1 crédito;"
      content={content}
    />
  );
};
