import { cn } from '@/lib/utils';
import { ArrowRight, LucideIcon } from 'lucide-react';

type CardDescriptionProps = {
  title: string;
  description: string;
  cardName: string;
  isSession: () => void;
  icon: LucideIcon;
  className?: string;
};

export const CardDescription = ({
  cardName,
  description,
  title,
  icon: Icon,
  className,
  isSession,
}: CardDescriptionProps) => {
  return (
    <div
      className={cn(
        'rounded-xl border h-full border-muted-foreground bg-card-foreground text-card-foreground shadow py-6 px-6 flex flex-col gap-3',
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
      <span className="font-page font-semibold text-background text-xl">
        {title}
      </span>
      <p className="text-muted font-sans font-semibold text-sm mb-3">
        {description}
      </p>
      <div className="font-page font-semibold text-background flex gap-4 items-center mt-auto">
        Acessar Agora
        <button
          onClick={isSession}
          className="bg-black w-[40px] h-[30px] flex items-center justify-center rounded-full"
        >
          <ArrowRight className="text-white" />
        </button>
      </div>
    </div>
  );
};
