import {
  ArrowDown,
  ArrowRight,
  BookOpenCheck,
  Bot,
  Languages,
  Layout,
  Rocket,
  Workflow,
} from 'lucide-react';
import { Lines } from './lines';
import { CardDescriptionAi } from './card-description/card-description-ai';
import { cn } from '@/lib/utils';
import { CardDescription } from './card-description';

type SevicesProps = {
  isSession: () => void;
};

export const Sevices = ({ isSession }: SevicesProps) => {
  return (
    <section className="h-full w-full bg-current mt-[-20rem]">
      <div className="max-w-[1400px] w-[90%] h-full mx-auto pt-[26rem] pb-[10rem] relative">
        <Lines className="left-28 h-[16.6rem] top-[20rem] z-10 max-md:left-6" />
        <Lines className="right-28 h-[16.6rem] top-[20rem] z-10 max-md:right-6" />
        <div className="flex flex-col items-center justify-center">
          <div className="py-2 px-6 w-fit bg-background font-page rounded-2xl mb-2 font-semibold flex gap-2 items-center text-foreground max-md:text-sm z-10">
            <Bot size={20} />
            Use a AI a seu favor!
          </div>
          <h2
            className={cn(
              'font-page text-[50px] font-semibold normal-case leading-[96px] tracking-[-1px] text-glow text-background z-20 text-center',
              'max-xl:text-[48px] max-xl:leading-[80px] max-xl:tracking-[-3px]',
              'max-lg:text-[45px] max-lg:leading-[62px] max-lg:tracking-[-3px]',
              'max-md:text-[40px] max-md:leading-[50px] max-md:tracking-[-1px]',
              'max-sm:text-[35px] max-sm:leading-[45px] max-sm:tracking-[-1px]'
            )}
          >
            Crie e Explore Com os Nossos Serviços
          </h2>
        </div>
        <div
          className={cn(
            'grid grid-cols-4 grid-rows-2 mt-6 gap-6',
            'max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-4 max-lg:mt-6',
            'max-md:grid-cols-1 max-md:grid-rows-[auto] max-lg:grid-rows-6 max-lg:gap-4 max-lg:mt-10 '
          )}
        >
          <CardDescriptionAi
            title="Gere seu Currículo Automaticamente"
            description="Gere seu currículo de acordo com a descrição e nome da vaga!"
            cardName="Vença qualquer plataforma"
            isSession={isSession}
            iconBtn={ArrowRight}
            nameBtn="Gerar Agora"
            icon={BookOpenCheck}
          />
          <CardDescriptionAi
            title="Traduza para Qualquer Idioma"
            description="Traduza automaticamente todas as informações do currículo para qualquer Idioma!"
            cardName="Vença qualquer plataforma"
            isSession={isSession}
            nameBtn="Quero Traduzir"
            iconBtn={ArrowRight}
            icon={Languages}
          />
          <CardDescription
            title=" Currículos Vencedores"
            description=" Com a Modifyca, você cria currículos vencedores em minutos, combinando
          design moderno, inteligência artificial e otimização estratégica para
          destacar suas habilidades e experiências"
            cardName="Vença qualquer plataforma"
            isSession={isSession}
            icon={Rocket}
            className="col-span-2 max-md:col-span-1"
          />
          <CardDescriptionAi
            title="Melhorar e Corrigir Automaticamente"
            description="Corrija automaticamente qualquer tipo de texto, garantindo precisão, clareza!"
            cardName="Vença qualquer plataforma"
            nameBtn="Melhorar Agora"
            isSession={isSession}
            iconBtn={ArrowRight}
            icon={Workflow}
          />

          <CardDescriptionAi
            title="Modelos Disponíveis"
            description=" Descubra nossos modelos vencedores, agora disponíveis para você. Acesse facilmente as opções mais eficazes!"
            cardName="Vença qualquer plataforma"
            isSession={isSession}
            nameBtn="Ver Modelos"
            iconBtn={ArrowDown}
            icon={Layout}
          />

          <CardDescription
            title="Explore o Potencial da nossa AI"
            description="Nossa inteligência artificial analisa, otimiza e refina seu currículo para destacar suas habilidades e experiências de forma estratégica."
            cardName="AI quando e a qualquer momento"
            isSession={isSession}
            icon={Bot}
            className="col-span-2 max-md:col-span-1"
          />
        </div>
      </div>
    </section>
  );
};
