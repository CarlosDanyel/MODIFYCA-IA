import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Copy, Download, HomeIcon, Trash } from 'lucide-react';
import Link from 'next/link';
import { DeleteResumeDialog } from './delete-resume-dialog';
import { DuplicateResumeDialog } from './duplicate-resume-dialog';
import { useResumeDownload } from '@/hook/use-resume-download';
import { RenameTitleDialog } from './rename-title-dialog';

type NavigationHeaderProps = {
  title: string;
};

export const NavigationHeader = ({ title }: NavigationHeaderProps) => {
  const { handleDownloadResume, isLoading } = useResumeDownload(title);
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
        <RenameTitleDialog>
          <Tooltip content="Editar Nome de currículo">
            <p className="cursor-pointer text-lg font-title font-bold ml-1">
              {title}
            </p>
          </Tooltip>
        </RenameTitleDialog>
      </div>
      <div className="flex gap-1 ">
        <DeleteResumeDialog>
          <Tooltip content="Deletar Currículo">
            <Button
              variant={'secondary'}
              className="w-8 h-8 bg-transparent"
              size={'icon'}
            >
              <Trash size={18} />
            </Button>
          </Tooltip>
        </DeleteResumeDialog>
        <DuplicateResumeDialog>
          <Tooltip content="Duplicar Currículo">
            <Button
              variant={'secondary'}
              className="w-8 h-8 bg-transparent"
              size={'icon'}
            >
              <Copy size={18} />
            </Button>
          </Tooltip>
        </DuplicateResumeDialog>
        <Tooltip content="Baixar Currículo">
          <Button
            onClick={handleDownloadResume}
            variant={'secondary'}
            className="w-8 h-8 bg-transparent"
            size={'icon'}
            disabled={isLoading}
          >
            <Download size={18} />
          </Button>
        </Tooltip>
      </div>
    </header>
  );
};
