import { cn } from '@/lib/utils';

type LineProps = {
  className: string;
};

export const Lines = ({ className }: LineProps) => {
  return (
    <div
      className={cn(
        'flex gap-10 absolute max-xl:h-[15.6rem] max-lg:h-[15.2rem] max-md:h-[14.2rem] max-[737px]:h-[17.3rem] max-sm:h-[16.7rem]',
        className
      )}
    >
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
      <div className="bg-[#D9D9D9] w-[1px] h-full"></div>
    </div>
  );
};
