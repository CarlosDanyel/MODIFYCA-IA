import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type CardDescriptionAiProps = {
  title: string;
  description: string;
  cardName: string;
  isSession: () => void;
  icon: LucideIcon;
  iconBtn: LucideIcon;
  className?: string;
  nameBtn?: string;
};

export const CardDescriptionAi = ({
  cardName,
  description,
  title,
  icon: Icon,
  iconBtn: IconBtn,
  nameBtn,
  className,
  isSession,
}: CardDescriptionAiProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border h-full border-muted-foreground bg-card-foreground text-card-foreground shadow overflow-hidden py-5 px-5 flex flex-col gap-3',
        'justify-between',
        className
      )}
    >
      <div
        className={cn(
          'rounded-xl w-fit text-muted text-xs flex gap-2 p-1.5 items-center font-page font-medium',
          'bg-[rgba(0, 0, 0, 0.11)] border border-[#000000]'
        )}
      >
        <Icon size={20} />
        {cardName}
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-page font-semibold text-background text-xl">
          {title}
        </span>
        <p className="text-muted font-sans font-semibold text-sm ">
          {description}
        </p>
      </div>
      <div className="font-page font-semibold text-background flex gap-4 items-center mt-auto">
        {nameBtn}
        <button
          onClick={isSession}
          className="bg-black w-[40px] h-[30px] flex items-center justify-center rounded-full"
        >
          <IconBtn className="text-white" />
        </button>
      </div>
    </div>
  );
};
