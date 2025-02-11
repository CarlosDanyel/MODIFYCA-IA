import { ResumesList } from '@/components/pages/dashboard/resumes/resumes-list';
import { ResumesListSkeleton } from '@/components/pages/dashboard/resumes/resumes-list/skeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Modifyca | Crie e gerencie seus currículos',
  description:
    'Painel de acesso aos currículos criados na Modifyca. Acesse e gerencie seus currículos de forma simples e rápida.',
};

export default async function DashboardResumesPages() {
  return (
    <>
      <h1 className="text-4xl font-title font-bold mb-6">Currículos</h1>
      <Suspense fallback={<ResumesListSkeleton />}>
        <ResumesList />
      </Suspense>
    </>
  );
}
