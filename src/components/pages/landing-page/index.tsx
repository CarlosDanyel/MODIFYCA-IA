'use client';

import { Header } from '@/components/pages/landing-page/header';
import { Sevices } from './main/services';
import { TemplateAutoPlay } from './main/tamplates-autoPlay';
import { PageHome } from './main/home';
import { Footer } from './footer';

export const HomePage = () => {
  return (
    <div className="h-full w-full pt-9 bg-white max-sm:pt-0 overflow-hidden">
      <div className="h-full w-full relative  ">
        <Header />
        <main className="h-full w-full">
          <PageHome />
          <Sevices />
          <TemplateAutoPlay />
        </main>
        <Footer />
      </div>
    </div>
  );
};
