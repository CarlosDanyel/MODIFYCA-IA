import { Button } from '@/components/ui/button';
import { Tooltip } from '@/components/ui/tooltip';
import { useResumeDownload } from '@/hook/use-resume-download';
import { cn } from '@/lib/utils';
import { Download, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import { useControls } from 'react-zoom-pan-pinch';

type TransformControlsProps = {
  title: string;
};

export const TransformControls = ({ title }: TransformControlsProps) => {
  const { zoomIn, zoomOut, centerView } = useControls();
  const { handleDownloadResume, isLoading } = useResumeDownload(title);

  const controls = [
    { icon: ZoomIn, label: 'Aumentar Zoom', onclick: () => zoomIn(0.2) },
    { icon: ZoomOut, label: 'Diminuir Zoom', onclick: () => zoomOut(0.2) },
    {
      icon: RotateCcw,
      label: 'Resetar Posição',
      onclick: () => centerView(0.5),
    },
    {
      icon: Download,
      label: 'Baixar PDF',
      onclick: () => handleDownloadResume(),
      disabled: isLoading,
    },
  ];
  return (
    <div
      className={cn(
        'absolute left-1/2 -translate-x-1/2 bottom-4 z-20 bg-background border border-muted',
        'py-3 px-4 rounded-full flex items-center gap-2'
      )}
    >
      {controls.map(constrol => (
        <Tooltip key={constrol.label} content={constrol.label}>
          <Button
            variant={'secondary'}
            className="h-6 w-6 bg-transparent"
            size="icon"
            onClick={constrol.onclick}
            disabled={constrol.disabled}
          >
            <constrol.icon size={16} />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};
