import { Layout } from 'lucide-react';
import { AutoPlay } from './autoPlay';

export const TemplateAutoPlay = () => {
  return (
    <section className="w-full h-full bg-background">
      <div className="max-w-[1400px] w-[90%] h-full mx-auto pt-[6rem] pb-[5rem] relative">
        <div className="flex flex-col items-start justify-start">
          <div className="py-2 px-6 w-fit bg-white font-page rounded-2xl  font-semibold flex gap-2 items-center text-background">
            <Layout size={20} />
            Use quando quiser
          </div>
          <h2 className="font-page text-[50px] font-ww font-semibold normal-case leading-[96px] tracking-[-1px] text-start text-glow text-current z-20">
            Modelos Disponíveis
          </h2>
        </div>
        <AutoPlay />
      </div>
    </section>
  );
};
