import Logo from '@/assets/logo.svg';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-current py-3">
      <div className="max-w-[1400px] w-[90%] h-full mx-auto flex justify-between items-center">
        <p className="font-page font-medium text-zinc-500 text-base">
          Copyright © 2025 <span className="text-background">modifyca.com</span>
          . Todos os direitos reservados.
        </p>

        <Link
          href={'/'}
          className=" w-fit flex gap-2 items-center font-page font-medium text-zinc-600 text-base"
        >
          Powered by
          <Logo className="w-[20px] cursor-pointer" />
        </Link>
      </div>
    </footer>
  );
};
