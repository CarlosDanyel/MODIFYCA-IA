import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResumePage from '@/components/pages/dashboard/resume';
import { getResumeById } from '@/db/queries';
import { auth } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Modifyca | Currículo',
  description:
    'Painel de acesso aos currículos criados na Modifyca. Acesse e gerencie seus currículos de forma simples e rápida.',
};

interface DashboardResumesPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardResumePage({
  params,
}: Awaited<DashboardResumesPageProps>) {
  const resumeId = (await params).id;

  const resume = await getResumeById(resumeId);
  if (!resume) return notFound();

  const initialData = resume.data as ResumeData;
  const session = await auth();

  return (
    <ResumePage
      title={resume.title}
      initialData={initialData}
      user={session?.user}
    />
  );
}
