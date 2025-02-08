'use client';

import { cn } from '@/lib/utils';
import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './primitive';
import { ReactNode, useEffect, useState } from 'react';

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
  timeOpen,
  timeClose,
  ...props
}: TooltipProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsActive(true);

      const endTimer = setTimeout(() => {
        setIsActive(false);
      }, timeOpen);

      return () => clearTimeout(endTimer);
    }, timeClose);

    return () => clearTimeout(startTimer);
  }, [timeClose, timeOpen]);

  return (
    <TooltipProvider>
      <TooltipRoot open={isActive || isHovered} delayDuration={300}>
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
