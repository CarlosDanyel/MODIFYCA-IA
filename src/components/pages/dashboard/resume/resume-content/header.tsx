import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Copy, Download, HomeIcon, Trash } from 'lucide-react';
import Link from 'next/link';

export const NavigationHeader = () => {
  return (
    <header
      className={cn(
        'absolute w-full left-0 top-0 z-10 p-2 bg-background border-b border-muted flex ',
        'items-center justify-between gap-2'
      )}
    >
      <div className="flex items-center gap-2">
        <Tooltip content="Voltar ao Painel">
          <Link href={'/dashboard/resumes'} passHref>
            <Button
              variant={'secondary'}
              className="w-8 h-8 bg-transparent"
              size="icon"
            >
              <HomeIcon size={18} />
            </Button>
          </Link>
        </Tooltip>
        <span className="text-muted-foreground">/</span>
        <p className="text-lg font-title font-bold ml-1">Titulo do Currículo</p>
      </div>
      <div className="flex gap-1 ">
        <Tooltip content="Deletar Currículo">
          <Button
            variant={'secondary'}
            className="w-8 h-8 bg-transparent"
            size={'icon'}
          >
            <Trash size={18} />
          </Button>
        </Tooltip>

        <Tooltip content="Duplicar Currículo">
          <Button
            variant={'secondary'}
            className="w-8 h-8 bg-transparent"
            size={'icon'}
          >
            <Copy size={18} />
          </Button>
        </Tooltip>

        <Tooltip content="Baixar Currículo">
          <Button
            variant={'secondary'}
            className="w-8 h-8 bg-transparent"
            size={'icon'}
          >
            <Download size={18} />
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};
