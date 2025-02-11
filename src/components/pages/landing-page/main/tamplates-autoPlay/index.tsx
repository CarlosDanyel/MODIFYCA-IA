'use client';

import { Layout } from 'lucide-react';
import { AutoPlay } from './autoPlay';
import { cn } from '@/lib/utils';

export const TemplateAutoPlay = () => {
  return (
    <section className="w-full h-full bg-background" id="Modelos">
      <div className="max-w-[1400px] w-[82%] h-full mx-auto pt-[6rem] pb-[5rem] relative">
        <div className="flex flex-col items-start justify-start">
          <div className="py-2 px-6 w-fit bg-white font-page rounded-2xl  font-semibold flex gap-2 items-center text-background max-md:text-sm mb-4">
            <Layout size={20} />
            Os Melhores Modelos
          </div>
          <h2
            className={cn(
              'font-page text-[50px] font-semibold normal-case leading-[96px] tracking-[-1px] text-start text-glow text-current z-20',
              'max-xl:text-[48px] max-xl:leading-[80px] max-xl:tracking-[-3px]',
              'max-lg:text-[45px] max-lg:leading-[62px] max-lg:tracking-[-3px]',
              'max-md:text-[40px] max-md:leading-[50px] max-md:tracking-[-1px]',
              'max-sm:text-[35px] max-sm:leading-[45px] max-sm:tracking-[-1px]'
            )}
          >
            Modelos Disponíveis
          </h2>
        </div>
        <AutoPlay />
      </div>
    </section>
  );
};
