'use client';

import { cn } from '@/lib/utils';
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './primitive';
import { ReactNode, useState } from 'react';

type TooltipProps = {
  children: ReactNode;
  content: string | number | ReactNode;
  className?: string;
  timeOpen?: number;
  timeClose?: number;
};

export const Tooltip = ({
  children,
  content,
  className,
  ...props
}: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TooltipProvider>
      <TooltipRoot open={isHovered} delayDuration={300}>
        <TooltipTrigger
          asChild
          {...props}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
