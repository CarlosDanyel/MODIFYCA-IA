'use client';

import { Header } from '@/components/pages/landingPage/header';
import { Perfil } from '@/components/pages/landingPage/perfil';
import { User } from 'next-auth';
import { Button } from '@/components/ui/button';
import PerfilCursos1 from '@/assets/Perfil1.svg';
import PerfilCursos2 from '@/assets/Perfil2.svg';
import PerfilCursos3 from '@/assets/Perfil3.svg';
import PerfilCursos4 from '@/assets/Perfil4.svg';
import { ArrowDown, ArrowRight, Bot, Rocket, SmilePlus } from 'lucide-react';
import Image from 'next/image';
import { TiltComponent } from '@/components/pages/landingPage/Tilt';

import { useRouter } from 'next/navigation';
import { Tooltip } from '@/components/ui/tooltip';

import { CardDescription } from './card-description';
import { Lines } from './lines';

type HomePageProps = {
  user?: User;
};

export const HomePage = ({ user }: HomePageProps) => {
  const router = useRouter();

  const userId = user?.id;

  const isSession = () => {
    if (!userId) {
      router.push('/auth/login');

      return;
    }

    router.push('/dashboard/resumes');
  };

  const allTemplates: ResumeTemplates[] = ['ditto', 'eevee', 'jynx', 'onix'];

  return (
    <div className="h-full w-full pt-9 bg-white">
      <div className="h-full w-full relative  ">
        <Header />
        <main className="">
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
                <Tooltip content="Plataforma realmente muito boa">
                  <PerfilCursos1 className="w-16 cursor-pointer" />
                </Tooltip>
              </Perfil>
              <Perfil className="top-72 left-[1rem] z-10">
                <Tooltip content="Bem rapida e pratica">
                  <PerfilCursos2 className="w-16 cursor-pointer" />
                </Tooltip>
              </Perfil>
              <Perfil className="bottom-60 left-[13rem] z-10">
                <Tooltip content="otimos modelos">
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
                  O Modifyca é a plataforma definitiva para quem deseja um
                  currículo profissional, moderno e otimizado para o mercado de
                  trabalho.
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
          <section className="h-full w-full bg-current mt-[-20rem]">
            <div className="max-w-[1400px] w-[90%] h-full mx-auto pt-[26rem] relative">
              <Lines className="left-28 h-[16.8rem] top-[20rem] z-10" />
              <Lines className="right-28 h-[16.8rem] top-[20rem] z-10" />
              <div className="flex flex-col items-center justify-center">
                <div className="py-2 px-6 w-fit bg-background font-page rounded-2xl  font-semibold flex gap-2 items-center text-foreground">
                  <Bot size={20} />
                  Use a AI a seu favor!
                </div>
                <h2 className="font-page text-[50px] font-ww font-semibold normal-case leading-[96px] tracking-[-1px] text-start text-glow text-background z-20">
                  Crie e explore com os nossos serfiços
                </h2>
              </div>
              <div className="w-full max-h-[500px] grid grid-cols-2 grid-rows-2 mt-9 gap-6 ">
                <div className="row-span-2 rounded-xl border border-muted-foreground bg-background text-card-foreground shadow overflow-hidden">
                  <div className="w-full h-full flex gap-4 overflow-hidden ">
                    {allTemplates.map(template => (
                      <div
                        key={`template-${template}`}
                        className="w-fit h-full"
                      >
                        <Image
                          className="w-fit h-full object-cover"
                          width={350}
                          height={100}
                          src={`/images/templates/${template}.webp`}
                          alt={template}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <CardDescription
                  title=" Currículos Vencedores"
                  description=" Com a Modifyca, você cria currículos vencedores em minutos, combinando
                    design moderno, inteligência artificial e otimização estratégica para
                    destacar suas habilidades e experiências"
                  cardName="Vença qualquer plataforma"
                  isSession={isSession}
                  icon={Rocket}
                />
                <CardDescription
                  title="Explore o Potencial da nossa AI"
                  description="Nossa inteligência artificial analisa, otimiza e refina seu currículo para destacar suas habilidades e experiências de forma estratégica."
                  cardName="AI quando e a qualquer momento"
                  isSession={isSession}
                  icon={Bot}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
