import React from 'react';
import { TemplateListSection } from './sections/templates-list';
import { Separator } from '@/components/ui/separator';
import { LayoutSection } from './sections/layout';
import { ThemeSection } from './sections/theme';
import { LanguageSection } from './sections/language';
import Image from 'next/image';

const StructureSidebar = () => {
  return (
    <aside className="w-full h-full p-6 pt-0 overflow-y-auto ">
      <div className="w-full flex items-center justify-center my-3">
        <Image
          width={200}
          height={100}
          src={'/images/logo-th.webp'}
          alt="Uma mulher segurando em suas mãos e  olhando para o celular sorridente, o celular ilumina o seu rosto"
          className={'max-w-[90px]'}
        />
      </div>
      <Separator className=" mb-5" />
      <TemplateListSection />
      <Separator className="my-5" />
      <LanguageSection />
      <Separator className="my-5" />
      <LayoutSection />
      <Separator className="my-5" />
      <ThemeSection />
    </aside>
  );
};

export default StructureSidebar;
