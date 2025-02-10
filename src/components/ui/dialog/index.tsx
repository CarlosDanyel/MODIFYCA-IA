import { ReactNode } from 'react';
import {
  Dialog as DialogRoot,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './primitive';

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
      <DialogContent className={className}>
        <DialogHeader className={classNameTitle}>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
      </DialogContent>
    </DialogRoot>
  );
};
