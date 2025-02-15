import React from 'react';
import { TemplateListSection } from './sections/templates-list';
import { Separator } from '@/components/ui/separator';
import { LayoutSection } from './sections/layout';
import { ThemeSection } from './sections/theme';
import { LanguageSection } from './sections/language';
import { RenameTitle } from './sections/rename';

const StructureSidebar = () => {
  return (
    <aside className="w-full h-full p-6  overflow-y-auto ">
      <RenameTitle />
      <Separator className="my-5" />
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
