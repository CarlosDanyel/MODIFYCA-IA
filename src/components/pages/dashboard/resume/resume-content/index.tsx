'use client';

import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { ResumeTemplate } from './templates';
import { TransformControls } from './controls';
import { NavigationHeader } from './header';
import { useFormContext } from 'react-hook-form';
import { User } from 'next-auth';
import { useState } from 'react';

type ResumeContentProps = {
  title: string;
  isMobile?: boolean;
  user: User | undefined;
};

export const ResumeContent = ({ title, user }: ResumeContentProps) => {
  const { watch } = useFormContext<ResumeData>();
  const [disabled, Setdisabled] = useState(false);

  const fisrtName = user?.name?.split(' ')[0] as string;

  const data = watch();

  return (
    <section className="overflow-hidden w-full h-full flex items-center justify-center relative bg-muted dark:bg-background">
      <TransformWrapper
        initialScale={0.5}
        minScale={0.4}
        centerOnInit={true}
        centerZoomedOut
        limitToBounds={false}
        disabled={disabled}
      >
        <>
          <NavigationHeader title={title} name={fisrtName} />
          <TransformControls
            title={title}
            disabled={disabled}
            Setdisabled={Setdisabled}
          />
          <TransformComponent>
            <ResumeTemplate data={data} />
          </TransformComponent>
        </>
      </TransformWrapper>
    </section>
  );
};
