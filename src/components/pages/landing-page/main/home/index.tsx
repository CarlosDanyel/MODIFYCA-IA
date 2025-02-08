'use client';

import { Button } from '@/components/ui/button';
import PerfilCursos1 from '@/assets/Perfil1.svg';
import PerfilCursos2 from '@/assets/Perfil2.svg';
import PerfilCursos3 from '@/assets/Perfil3.svg';
import PerfilCursos4 from '@/assets/Perfil4.svg';
import { ArrowDown, ArrowRight, SmilePlus } from 'lucide-react';
import Image from 'next/image';

import { Tooltip } from '@/components/ui/tooltip';
import { Perfil } from './perfil';
import { TiltComponent } from '../services/Tilt';

type PageHomeProps = {
  isSession: () => void;
};

export const PageHome = ({ isSession }: PageHomeProps) => {
  return (
    <>
      <section className=" h-[93vh] bg-black flex flex-col rounded-2xl relative mx-8 overflow-hidden">
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
        <div className="max-w-[1020px] w-[90%] h-full mx-auto flex flex-col items-center justify-center relative">
          <Perfil className="right-20 bottom-1/4 z-10">
            <Tooltip
              timeOpen={3000}
              timeClose={3000}
              content="Plataforma realmente muito boa"
            >
              <PerfilCursos1 className="w-16 cursor-pointer" />
            </Tooltip>
          </Perfil>
          <Perfil className="top-72 left-[1rem] z-10">
            <Tooltip
              timeOpen={3000}
              timeClose={100}
              content="Muito facil e rapido de criar"
            >
              <PerfilCursos2 className="w-16 cursor-pointer" />
            </Tooltip>
          </Perfil>
          <Perfil className="bottom-60 left-[13rem] z-10">
            <Tooltip timeOpen={3000} timeClose={6000} content="Otimos modelos">
              <PerfilCursos3 className="w-16 cursor-pointer" />
            </Tooltip>
          </Perfil>
          <div className="flex flex-col justify-center items-center mt-[-3rem]">
            <div className="py-2 px-6 bg-white font-page rounded-2xl mb-5 text-background font-semibold flex gap-2 items-center">
              <SmilePlus />
              Currículos Vencedores
            </div>
            <h1 className="font-page text-[80px] font-ww font-semibold normal-case leading-[96px] tracking-[-4px] text-center text-glow">
              Crie seu currículo com a <br /> melhor plataforma -{' '}
              <span className="text-sky-400">Modifyca</span>
            </h1>
            <p className="max-w-[700px] mx-auto text-center text-muted-foreground mt-6">
              O Modifyca é a plataforma definitiva para quem deseja um currículo
              profissional, moderno e otimizado para o mercado de trabalho.
            </p>
            <div className="flex items-center gap-6 mt-11">
              <Button
                variant={'link'}
                size={'page'}
                className="rounded-md  font-semibold font-page text-white flex gap-2  "
              >
                Conhecer a Modifyca
                <ArrowDown />
              </Button>
              <Button
                variant={'default'}
                size={'page'}
                className="rounded-md bg-white font-semibold font-page text-background flex gap-2 "
                onClick={isSession}
              >
                Comece gratuitamente
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1400px] w-[90%] h-full mx-auto mt-[-13rem] relative">
        <TiltComponent>
          <Image
            src={'/images/dashboard.webp'}
            alt="Plataforma Modifyca"
            width={2000}
            height={800}
            className="w-full h-full object-cover rounded-2xl"
          />
        </TiltComponent>
        <Perfil className="bottom-60 left-[13rem] z-10">
          <Tooltip content="Adicionando os ultimos detalhes">
            <PerfilCursos4 className="w-16 cursor-pointer" />
          </Tooltip>
        </Perfil>
      </section>
    </>
  );
};
