import { ArrowDownNarrowWide, LayoutTemplate } from 'lucide-react';
import SectionTitle from '../../infos-sidebar/section-title';
import { Button } from '@/components/ui/button';
import { TemplateDialog } from './template-dialog';
import { useState } from 'react';

const allTemplates: ResumeTemplates[] = ['ditto', 'eevee', 'jynx', 'onix'];

export const TemplateListSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col gap-[1rem]">
        <SectionTitle title="Modelos" icon={LayoutTemplate} />
        <Button
          className="w-full flex gap-2"
          variant={'outline'}
          onClick={() => setOpen(true)}
        >
          <ArrowDownNarrowWide />
          Mudar Template
        </Button>
      </div>
      <TemplateDialog
        allTemplates={allTemplates}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
