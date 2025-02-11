'use client';

import Logo from '@/assets/logo.svg';
import { useState } from 'react';
import { ContactDialog } from './contact-dialog';
import Link from 'next/link';
import { useIsMobile } from '@/hook/use-isMobile';
import { Navbar } from './navbar';
import { NavbarMobile } from './navbar/mobile-dialog-menu';
import { cn } from '@/lib/utils';

export const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile(838);

  const menuItems = ['Home', 'Serviços', 'Modelos'];

  return (
    <>
      <header
        className={cn(
          'absolute left-0 right-0 top-8 w-[85%] bg-black/40 max-w-[950px] mx-auto px-3.5 py-2 border border-muted rounded-2xl z-10',
          isMobile && 'py-3 top-7'
        )}
      >
        <div className="flex justify-between items-center h-full">
          <div className="w-[220px] text-accent-foreground font-semibold">
            <Link href={'/'} className=" flex gap-2 items-end ">
              <Logo
                className={cn(
                  'max-w-[25px] cursor-pointer z-20',
                  isMobile && 'max-w-[20px]'
                )}
              />
              Modifyca
            </Link>
          </div>

          <Navbar
            active={setActiveItem}
            activeItem={activeItem}
            infos={menuItems}
            setOpen={setOpen}
          />

          <NavbarMobile
            active={setActiveItem}
            activeItem={activeItem}
            infos={menuItems}
            open={open}
            setOpen={setOpen}
          />
        </div>
      </header>
      <ContactDialog open={open} setOpen={setOpen} />
    </>
  );
};
