import { cn } from '@/lib/utils';
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './primitive';
import { ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  content: string | number | ReactNode;
  className?: string;
};

export const Tooltip = ({
  children,
  content,
  className,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300}>
        <TooltipTrigger asChild {...props}>
          {children}
        </TooltipTrigger>
        <TooltipContent
          className={cn(
            'bg-background text-sm border border-muted text-foreground',
            className
          )}
        >
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
