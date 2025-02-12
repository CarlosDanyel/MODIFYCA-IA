'use client';

import Logo from '@/assets/logo.svg';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <footer className="bg-current py-3">
      <div className="max-w-[1400px] w-[90%] gap-4 h-full mx-auto flex justify-between items-center max-sm:flex-col">
        <p className="font-page font-medium text-zinc-500 text-center">
          Copyright © 2025 <span className="text-background">modifyca.com</span>
          . Todos os direitos reservados.
        </p>
        <Link
          to="Home"
          duration={800}
          smooth={true}
          className=" w-fit flex gap-2 items-center font-page font-medium text-zinc-600 text-base cursor-pointer"
        >
          Powered by
          <Logo className="w-[20px]" />
        </Link>
      </div>
    </footer>
  );
};
