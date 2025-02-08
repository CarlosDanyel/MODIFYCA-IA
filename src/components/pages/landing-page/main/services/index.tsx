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
      <div className="max-w-[1400px] w-[90%] h-full mx-auto pt-[26rem] py-[8rem] relative">
        <Lines className="left-28 h-[16.8rem] top-[20rem] z-10" />
        <Lines className="right-28 h-[16.8rem] top-[20rem] z-10" />
        <div className="flex flex-col items-center justify-center">
          <div className="py-2 px-6 w-fit bg-background font-page rounded-2xl  font-semibold flex gap-2 items-center text-foreground">
            <Bot size={20} />
            Use a AI a seu favor!
          </div>
          <h2 className="font-page text-[50px] font-ww font-semibold normal-case leading-[96px] tracking-[-1px] text-start text-glow text-background z-20">
            Crie e Explore Com os Nossos Serviços
          </h2>
        </div>
        <div className="w-full max-h-[500px] grid grid-cols-2 grid-rows-2 mt-9 gap-6 ">
          <div
            className={cn(
              'row-span-2 rounded-xl bg-card-foreground text-card-foreground shadow overflow-hidden',
              'grid grid-cols-2 grid-rows-2 gap-6'
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
  );
};
