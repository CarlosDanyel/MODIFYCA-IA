import ResumePage from '@/components/pages/dashboard/resume';
import { getResumeById } from '@/db/queries';
import { auth } from '@/lib/auth';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type DashboardResumesPageProps = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: 'Modifyca | Currículo',
  description:
    'Painel de acesso aos currículos criados na Modifyca. Acesse e gerencie seus currículos de forma simples e rápida.',
};

export default async function DashboardResumesPage({
  params,
}: DashboardResumesPageProps) {
  const { id: resumeId } = await params;
  const resume = await getResumeById(resumeId);

  if (!resume) return notFound();

  const initialData = resume?.data as ResumeData;

  const session = await auth();

  return (
    <ResumePage
      title={resume.title}
      initialData={initialData}
      user={session?.user}
    />
  );
}
