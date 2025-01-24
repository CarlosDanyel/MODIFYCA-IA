'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import InfosSidebar from './infos-sidebar';
import { ResumeContent } from './resume-content';
import StructureSidebar from './structure-sidebar';
import { FormProvider, useForm } from 'react-hook-form';
import { User } from 'next-auth';
import { useCallback, useEffect, useRef } from 'react';
import { useDebounce } from '@/hook/use-debounce';
import { UpdatedResumeData } from '@/db/actions';
import { useParams } from 'next/navigation';
import { mergician } from 'mergician';
import { getHighResImage } from '@/lib/utils';

type ResumePageProps = {
  title: string;
  initialData: Partial<ResumeData>;
  user?: User;
};

const ResumePage = ({ initialData, title, user }: ResumePageProps) => {
  const params = useParams();

  const userImageUrl = getHighResImage(user?.image ?? '', 200);

  const resumeId = params.id as string;
  const defaultValues: ResumeData = {
    content: {
      summary: '<p></p>',
      image: {
        url: userImageUrl,
        visible: false,
      },
      infos: {
        titleResume: title,
        email: user?.email ?? '',
        fullName: user?.name ?? '',
        headline: '',
        location: '',
        phone: '',
        website: '',
      },

      certifications: [],
      educations: [],
      experiences: [],
      languages: [],
      projects: [],
      skills: [],
      socialMedias: [],
    },
    structure: {
      template: 'ditto',
      colorTheme: 'slate',
      language: 'portuguese',
      layout: {
        mainSection: [
          { key: 'socialMedias' },
          { key: 'summary' },
          { key: 'experiences' },
          { key: 'educations' },
          { key: 'certifications' },
          { key: 'projects' },
        ],
        slidebarSection: [{ key: 'languages' }, { key: 'skills' }],
      },
    },
  };

  const methods = useForm<ResumeData>({
    defaultValues: mergician(defaultValues, initialData),
  });

  const data = methods.watch();
  const debouncedData = useDebounce(JSON.stringify(data), 1000);

  const shoudSave = useRef(false);

  const handleSaveUpdates = useCallback(() => {
    try {
      if (!shoudSave.current) {
        shoudSave.current = true;
        return;
      }

      const updatedData = methods.getValues();

      UpdatedResumeData(resumeId, updatedData);
    } catch (error) {
      console.error(error);
    }
  }, [methods, resumeId]);

  useEffect(() => {
    handleSaveUpdates();
  }, [debouncedData, handleSaveUpdates]);

  return (
    <FormProvider {...methods}>
      <main className=" w-full h-screen overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="w-full h-full ">
          <ResizablePanel minSize={20} maxSize={40} defaultSize={30}>
            <InfosSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel>
            <ResumeContent title={title} />
          </ResizablePanel>
          <ResizableHandle withHandle />

          <ResizablePanel minSize={20} maxSize={35} defaultSize={25}>
            <StructureSidebar />
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </FormProvider>
  );
};

export default ResumePage;
