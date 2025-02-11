'use client';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ResumeTemplate } from './templates';
import { TransformControls } from './controls';
import { NavigationHeader } from './header';
import { useFormContext } from 'react-hook-form';

type ResumeContentProps = {
  title: string;
  isMobile?: boolean;
};

export const ResumeContent = ({ title, isMobile }: ResumeContentProps) => {
  const { watch } = useFormContext<ResumeData>();

  const data = watch();

  return (
    <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit={true}
        centerZoomedOut
        limitToBounds={false}
        disabled={!isMobile ? false : true}
      >
        <>
          <NavigationHeader title={title} />
          <TransformControls title={title} />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
