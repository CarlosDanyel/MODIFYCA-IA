import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { signIn } from '@/lib/auth';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

type Providers = 'github' | 'google' | 'linkedin';

export const metadata: Metadata = {
  title: 'Modifyca | Faça Login',
  description:
    'Acesse sua conta na Modifyca para criar e gerenciar seus currículos online. Entre agora e destaque-se no mercado de trabalho!',
};

export default function LoginPage() {
  const handleLogin = async (form: FormData) => {
    'use server';

    const provider = form.get('provider') as Providers;

    await signIn(provider, { redirectTo: '/dashboard/resumes' });
  };

  return (
    <div className="grid grid-cols-[1.1fr,1fr] h-screen overflow-hidden max-lg:grid-cols-[1fr]">
      <aside className="relative max-lg:hidden">
        <Image
          width={200}
          height={100}
          src={'/images/logo-th.webp'}
          alt="Uma mulher segurando em suas mãos e  olhando para o celular sorridente, o celular ilumina o seu rosto"
          className={'max-w-[150px] absolute top-9 left-9'}
        />
        <Image
          width={900}
          height={800}
          src={'/images/auth-bg.webp'}
          alt="Uma mulher segurando em suas mãos e  olhando para o celular sorridente, o celular ilumina o seu rosto"
          className="w-full h-full object-cover"
          quality={100}
        />
      </aside>
      <form
        className="p-10 mx-auto w-full max-w-[610px] flex justify-center flex-col"
        action={handleLogin}
      >
        <div className="flex items-center justify-between mb-10 ">
          <Link href={'/'} className="flex items-center gap-2 text-base">
            <ArrowLeft size={18} />
            Voltar
          </Link>
        </div>
        <h1 className="text-2xl font-title font-bold">Boas Vindas</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Caso <b>não tenha conta</b>, ela sera criada automaticamente.
        </p>
        <div className="flex flex-col gap-3 mt-6">
          <Button
            className="w-full gap-2"
            type="submit"
            name="provider"
            value={'google'}
          >
            <FcGoogle size={20} />
            Entrar com Google
          </Button>
          <Button
            variant={'outline'}
            className="w-full gap-2"
            type="submit"
            name="provider"
            value={'github'}
          >
            <FaGithub size={20} />
            Entrar com Github
          </Button>
          <Button
            className="w-full gap-2"
            type="submit"
            name="provider"
            value={'linkedin'}
            variant={'outline'}
          >
            <FaLinkedin size={20} />
            Entrar com Linkedin
          </Button>
        </div>
      </form>
    </div>
  );
}
