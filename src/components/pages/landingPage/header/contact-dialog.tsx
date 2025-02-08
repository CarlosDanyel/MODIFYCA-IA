import { Dialog } from '@/components/ui/dialog';

type ContactDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const ContactDialog = ({ open, setOpen }: ContactDialogProps) => {
  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title="Entre em Contato"
      description="email e numero do Desenvolvedor Responsavel"
      content={
        <>
          <div className="flex gap-2 items-center">
            <span className="text-base text-muted-foreground">Email:</span>
            <p className="text-sm">carlosdanyelsilva27@gmail.com</p>
          </div>
          <div className="flex gap-2">
            <span className="text-base text-muted-foreground">Numero:</span>
            <p className="text-sm">11 98567-3241</p>
          </div>
        </>
      }
    />
  );
};
