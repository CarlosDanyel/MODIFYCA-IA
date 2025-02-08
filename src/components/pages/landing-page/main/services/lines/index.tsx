import { cn } from '@/lib/utils';

type LineProps = {
  className: string;
};

export const Lines = ({ className }: LineProps) => {
  return (
    <div className={cn('flex gap-10 absolute', className)}>
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
    </div>
  );
};
