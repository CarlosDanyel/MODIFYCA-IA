'use client';

import { Button } from '@/components/ui/button';
import Logo from '@/assets/logo.svg';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ContactDialog } from './contact-dialog';
import Link from 'next/link';

export const Header = () => {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [open, setOpen] = useState(false);

  const menuItems = ['Home', 'Interface', 'Currículos'];

  return (
    <>
      <header className="absolute left-0 right-0 top-8 w-[90%] bg-transparent max-w-[950px] mx-auto px-3.5 py-2 border border-muted rounded-2xl z-10">
        <div className="flex justify-between items-center">
          <div className="w-[220px] text-muted-foreground font-semibold">
            <Link href={'/'} className=" flex gap-2 items-end">
              <Logo className="max-w-[25px] cursor-pointer" />
              Modifyca
            </Link>
          </div>
          <nav className="flex gap-9 items-center justify-center text-foreground text-base">
            {menuItems.map(name => (
              <span
                key={name}
                onClick={() => setActiveItem(name)}
                className={cn(
                  'cursor-pointer bg-transparent px-3.5 py-2 rounded-md transition-colors ',
                  activeItem === name && 'bg-background'
                )}
              >
                {name}
              </span>
            ))}
          </nav>
          <div className="w-[220px] flex justify-end">
            <Button
              size="header"
              variant="default"
              className="py-3 px-6 rounded-md bg-white font-semibold font-page text-background flex gap-2 "
              onClick={() => setOpen(true)}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </header>
      <ContactDialog open={open} setOpen={setOpen} />
    </>
  );
};
