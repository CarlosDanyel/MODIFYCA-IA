import { Button } from '@/components/ui/button';
import {
  BadgeCent,
  Bot,
  BriefcaseBusiness,
  CirclePercent,
  Languages,
  PencilLine,
} from 'lucide-react';
import React, { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { GenerationDialog } from './generation-dialog';

const AiGenerationDropdown = () => {
  const [generationMode, setGenerationMode] = useState<AiGenerationMode | null>(
    null
  );

  const actions = [
    {
      label: 'Comprar créditos',
      icon: CirclePercent,
      onClick: () => console.log(''),
    },
    {
      label: 'Gerar conteudo para vaga de emprego',
      icon: BriefcaseBusiness,
      onClick: () => setGenerationMode('JOB_TITLE'),
    },
    {
      label: 'Melhorar e corrigir contéudo existente',
      icon: PencilLine,
      onClick: () => setGenerationMode('FIX_CONTENT'),
    },
    {
      label: 'Traduzir contéudo existente',
      icon: Languages,
      onClick: () => setGenerationMode('TRANSLATE_CONTENT'),
    },
  ];

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="text-foreground bg-blue-700 gap 2 text-xs px-2.5 py-1 h-9 hover:bg-blue-800 transition-all ">
            <Bot size={20} />
            Inteligência Arificial
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={15} align="start">
          <DropdownMenuLabel className="text-muted-foreground text-xs flex items-center gap-1">
            Você possui {''}
            <strong className="text-foreground inline-flex gap-0.5 items-center">
              <BadgeCent size={14} />
              20 Creditos
            </strong>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          {actions.map(action => (
            <DropdownMenuItem
              key={action.label}
              className="gap-2"
              onClick={action.onClick}
            >
              <action.icon size={18} className="text-muted-foreground" />
              {action.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {!!generationMode && (
        <GenerationDialog
          mode={generationMode}
          open={!!generationMode}
          setOpen={value => {
            if (!value) setGenerationMode(null);
          }}
        />
      )}
    </>
  );
};

export default AiGenerationDropdown;
