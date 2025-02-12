'use client';

import PerfilCursos1 from '@/assets/Perfil1.svg';
import PerfilCursos2 from '@/assets/Perfil2.svg';
import PerfilCursos3 from '@/assets/Perfil3.svg';
import PerfilCursos4 from '@/assets/Perfil4.svg';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight, SmilePlus } from 'lucide-react';
import { Perfil } from './perfil';
import { TiltComponent } from '../services/Tilt';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hook/use-isMobile';
import { Link as LinkTo } from 'react-scroll';
import { TooltipTime } from '@/components/ui/tooltip/time';
import Link from 'next/link';

export const PageHome = () => {
  const isMobile = useIsMobile(518);
  const isTable = useIsMobile(1024);

  return (
    <>
      <section
        id="Home"
        className={cn(
          'h-[93vh] bg-black flex flex-col rounded-2xl relative mx-8 overflow-hidden max-sm:rounded-none max-sm:mx-0 max-md:h-[89vh]',
          '[@media(max-height:830px)]:h-[690px]',
          isMobile && 'h-[70vh]'
        )}
      >
        <Image
          src={'/images/shadow.png'}
          alt=""
          width={600}
          height={600}
          className="absolute"
        />
        <Image
          src={'/images/shadow2.png'}
          alt=""
          width={600}
          height={600}
          className="absolute right-0"
        />
        <div
          className={cn(
            'max-w-[1020px] w-[90%] h-full mx-auto flex flex-col items-center justify-center relative max-md:mt-[-2.5rem] max-sm:mt-[-0rem]'
          )}
        >
          <Perfil className="right-20 bottom-1/4 z-10 max-sm:top-[40rem] max-sm:right-5 max-lg:bottom-[8rem] ">
            <TooltipTime
              timeOpen={3000}
              timeClose={3000}
              content="Plataforma realmente muito boa"
            >
              <PerfilCursos1 className="w-16 cursor-pointer" />
            </TooltipTime>
          </Perfil>
          <Perfil className="top-72 left-[1rem] z-10 max-lg:top-[14rem] max-sm:top-[30rem] max-[500px]:top-[39rem] max-[500px]:legt-[1rem]  ">
            <TooltipTime
              timeOpen={3000}
              timeClose={100}
              content="Muito facil e rapido de criar"
            >
              <PerfilCursos2 className="w-16 cursor-pointer" />
            </TooltipTime>
          </Perfil>

          {!isTable && (
            <Perfil
              className={cn(
                'bottom-60 left-[10rem] z-10 max-lg:hidden ',
                '[@media(max-height:870px)]:hidden'
              )}
            >
              <TooltipTime
                timeOpen={3000}
                timeClose={6000}
                content="Otimos modelos"
              >
                <PerfilCursos3 className="w-16 cursor-pointer" />
              </TooltipTime>
            </Perfil>
          )}

          <div
            className={cn(
              'flex flex-col justify-center items-center ',
              isMobile && 'mb-[-3rem]'
            )}
          >
            <div className="py-2 px-6 bg-white font-page rounded-2xl mb-5 font-semibold flex gap-2 items-center">
              <SmilePlus className="dark:text-background " />
              <span className="text-black max-md:text-sm">
                Currículos Vencedores
              </span>
            </div>
            <h1
              className={cn(
                'font-page text-[80px] font-semibold normal-case leading-[96px] tracking-[-4px] text-center text-glow text-white',
                'max-xl:text-[70px] max-xl:leading-[80px] max-xl:tracking-[-3px]',
                'max-lg:text-[50px] max-lg:leading-[62px] max-lg:tracking-[-3px]',
                'max-md:text-[40px] max-md:leading-[50px] max-md:tracking-[-1px]',
                'max-sm:text-[35px] max-sm:leading-[45px] max-sm:tracking-[-1px]'
              )}
            >
              Crie seu currículo com a <br /> melhor plataforma {''}
              <span className="text-sky-400">Modifyca</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-center text-muted-foreground mt-6 max-md:text-sm">
              O Modifyca é a plataforma definitiva para quem deseja um currículo
              profissional, moderno e otimizado para o mercado de trabalho.
            </p>
            <div className="flex items-center gap-6 mt-11  max-sm:flex-col-reverse ">
              <Button
                variant={'link'}
                size={'page'}
                className="rounded-md  font-semibold font-page text-white flex gap-2  "
              >
                <LinkTo to={'Serviços'} smooth={true} duration={1000}>
                  Conhecer a Modifyca
                </LinkTo>
                <ArrowDown />
              </Button>
              <Button
                variant={'default'}
                size={'page'}
                className="rounded-md font-semibold font-page text-background flex gap-2 "
              >
                <Link href="/dashboard/resumes" passHref>
                  Comece gratuitamente
                </Link>
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section
        className={cn(
          'max-w-[1400px] w-[90%] mx-auto mt-[-13rem] relative px-2 max-[638px]:w-[100%] max-md:mt-[-12.5rem] max-[1610px]:mt-[-10rem]',
          '[@media(max-height:940px)]:mt-[-7rem]',
          isMobile && 'hidden'
        )}
      >
        <TiltComponent>
          <Image
            src={'/images/dashboard.webp'}
            alt="Plataforma Modifyca"
            width={1300}
            height={800}
            className="w-[1900px] h-full object-cover rounded-2xl mx-auto max-[518px]:hidden"
          />
        </TiltComponent>
        <Perfil className="bottom-60 left-[13rem] z-10 max-[750px]:hidden">
          <TooltipTime content="Adicionando os ultimos detalhes">
            <PerfilCursos4 className="w-16 cursor-pointer" />
          </TooltipTime>
        </Perfil>
      </section>
    </>
  );
};
