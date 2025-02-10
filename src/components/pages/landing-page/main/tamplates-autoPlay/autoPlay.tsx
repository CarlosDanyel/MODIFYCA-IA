import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useIsMobile } from '@/hook/use-isMobile';

export const AutoPlay = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const isMobile = useIsMobile(671);

  const allTemplates: ResumeTemplates[] = ['ditto', 'eevee', 'jynx', 'onix'];

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="mt-10"
    >
      <CarouselContent>
        {allTemplates.map(template => (
          <CarouselItem
            key={`template-${template}`}
            className="basis-1/3 max-lg:basis-1/2 max-md:basis-full"
          >
            <div className="w-full h-[37rem] aspect-auto relative rounded border-2 border-muted  hover:brightness-95 transition-all cursor-pointer">
              <Image
                className="w-full h-full object-fill"
                width={600}
                height={130}
                quality={100}
                src={`/images/templates/${template}.webp`}
                alt={template}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isMobile && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};
