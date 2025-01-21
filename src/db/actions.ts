'use server';

import { auth } from '@/lib/auth';
import { db } from './drizzle';
import { resumes } from './schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

const getUserIdOrThow = async () => {
  const session = await auth();

  const userId = session?.user?.id;

  if (!userId) throw new Error('Usuario não encontrado');

  return userId;
};

export const createResume = async (title: string) => {
  const userId = await getUserIdOrThow();

  const newResume = await db
    .insert(resumes)
    .values({
      title,
      userId,
    })
    .returning();

  revalidatePath('/dashboard/resumes');

  return newResume[0];
};

export const UpdatedResumeData = async (id: string, data: ResumeData) => {
  await getUserIdOrThow();
  const UpdatedResume = await db
    .update(resumes)
    .set({ data, updatedAt: new Date() })
    .where(eq(resumes.id, id))
    .returning();

  revalidatePath('/dashboard/resumes');

  return UpdatedResume[0];
};

export const deleteResume = async (id: string) => {
  const userId = await getUserIdOrThow();

  const resume = await db.query.resumes.findFirst({
    where: eq(resumes.id, id),
  });

  if (!resume) throw new Error('Currículo não encontrado');
  if (resume.userId !== userId) throw new Error('Usuario não autorizado');

  await db.delete(resumes).where(eq(resumes.id, id)).execute();

  revalidatePath('/dashboard/resumes');
};

export const duplicateResume = async (id: string, title: string) => {
  const userId = await getUserIdOrThow();

  const resume = await db.query.resumes.findFirst({
    where: eq(resumes.id, id),
  });

  if (!resume) throw new Error('Currículo não encontrado');

  const newResume = await db
    .insert(resumes)
    .values({
      title,
      userId,
      data: resume.data,
    })
    .returning();

  revalidatePath('/dashboard/resumes');

  return newResume[0];
};

export const RenameResumeTitle = async (id: string, newTitle: string) => {
  await getUserIdOrThow();
  const UpdatedResume = await db
    .update(resumes)
    .set({ title: newTitle, updatedAt: new Date() })
    .where(eq(resumes.id, id))
    .returning();

  revalidatePath('/dashboard/resumes');

  return UpdatedResume[0];
};
