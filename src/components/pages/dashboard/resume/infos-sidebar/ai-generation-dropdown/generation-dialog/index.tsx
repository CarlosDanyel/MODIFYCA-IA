import { BaseDiaploProps, Dialog } from '@/components/ui/dialog';
import { JSX } from 'react';
import { GenerateFromJobTitle } from './job-title';

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
    FIX_CONTENT: <div>Melhorar e corrigir conteúdo existente</div>,
    TRANSLATE_CONTENT: <div>Traduzir conteúdo existente</div>,
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
