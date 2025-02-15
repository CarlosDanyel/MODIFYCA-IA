import { FolderPen, LayoutTemplate } from 'lucide-react';
import SectionTitle from '../../infos-sidebar/section-title';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { RenameTitleDialog } from '../../resume-content/rename-title-dialog';

export const RenameTitle = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <SectionTitle title="Renomear" icon={LayoutTemplate} />
        <RenameTitleDialog open={open} setOpen={setOpen}>
          <Button
            className="w-full flex gap-2"
            variant={'outline'}
            onClick={() => setOpen(true)}
          >
            <FolderPen />
            Renomear Currículo
          </Button>
        </RenameTitleDialog>
      </div>
    </>
  );
};
