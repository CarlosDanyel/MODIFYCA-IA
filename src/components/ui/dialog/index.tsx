import { ReactNode } from 'react';
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './primitive';
import { cn } from '@/lib/utils';

export type BaseDiaploProps = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children?: ReactNode;
};

type DialogProps = BaseDiaploProps & {
  title: string;
  description?: string;
  content?: ReactNode;
  className?: string;
  classNameTitle?: string;
};

export const Dialog = ({
  children,
  title,
  description,
  content,
  open,
  className,
  classNameTitle,
  setOpen,
}: DialogProps) => {
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      {children && <DialogTrigger asChild>{children}</DialogTrigger>}
      <DialogContent
        className={cn(
          'w-[90%] flex justify-start flex-col gap-4 max-sm:flex-start rounded-lg',
          className
        )}
      >
        <DialogHeader className={cn('text-start', classNameTitle)}>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
};
