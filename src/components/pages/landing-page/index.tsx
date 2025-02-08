'use client';

import { Header } from '@/components/pages/landing-page/header';

import { User } from 'next-auth';

import { Sevices } from './main/services';
import { TemplateAutoPlay } from './main/tamplates-autoPlay';
import { useRouter } from 'next/navigation';
import { PageHome } from './main/home';
import { Footer } from './footer';

type HomePageProps = {
  user?: User;
};

export const HomePage = ({ user }: HomePageProps) => {
  const router = useRouter();

  const userId = user?.id;

  const isSession = () => {
    if (!userId) {
      router.push('/auth/login');

      return;
    }

    router.push('/dashboard/resumes');
  };

  return (
    <div className="h-full w-full pt-9 bg-white">
      <div className="h-full w-full relative  ">
        <Header />
        <main className="h-full w-full">
          <PageHome isSession={isSession} />
          <Sevices isSession={isSession} />
          <TemplateAutoPlay />
        </main>
        <Footer />
      </div>
    </div>
  );
};
