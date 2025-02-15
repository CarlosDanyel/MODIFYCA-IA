import { Dialog } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
} from 'react-hook-form';

type TemplateDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  allTemplates: ResumeTemplates[];
};

export const TemplateDialog = ({
  open,
  setOpen,
  allTemplates,
}: TemplateDialogProps) => {
  const { control } = useFormContext<ResumeData>();

  const handleResume = (
    field: ControllerRenderProps<ResumeData, 'structure.template'>,
    template: ResumeTemplates
  ) => {
    field.onChange(template);
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title="Modelos de currículos"
      description="Escolha qual currículo usar!"
      className="w-[90%] max-w-[37rem]"
      content={
        <Controller
          control={control}
          name="structure.template"
          render={({ field }) => (
            <div
              className={cn(
                'w-full grid grid-cols-2 gap-4 mt-4 h-[68vh] overflow-hidden overflow-y-scroll rounded-xl scrollbar-hide'
              )}
            >
              {allTemplates.map(template => {
                const isSelected = field.value === template;
                return (
                  <button
                    type="button"
                    key={`template-${template}`}
                    className={cn(
                      'w-full aspect-auto relative rounded border-2 border-muted hover:brightness-95 transition-all',
                      'flex items-start justify-center',
                      isSelected && 'border-muted-foreground'
                    )}
                    onClick={() => handleResume(field, template)}
                  >
                    <Image
                      className="w-full h-full object-cover"
                      width={450}
                      height={130}
                      quality={100}
                      src={`/images/templates/${template}.webp`}
                      alt={template}
                    />
                    <div
                      className={cn(
                        'absolute text-sm inset-0 w-full h-full flex flex-col font-bold font-title capitalize',
                        'items-center justify-end p-2 bg-gradient-to-t from-background'
                      )}
                    >
                      {template}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        />
      }
    />
  );
};
