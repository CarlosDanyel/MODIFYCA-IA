'use client';

import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hook/use-isMobile';
import { cn } from '@/lib/utils';
import { Newspaper, SquareUser } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    {
      label: 'Currículos',
      labelMobile: 'Currículos',
      icon: Newspaper,
      path: '/dashboard/resumes',
    },
    {
      label: 'Configurações de Conta',
      labelMobile: 'Configurações',
      icon: SquareUser,
      path: '/dashboard/account',
    },
  ];

  const isMobile = useIsMobile(768);
  return (
    <nav className="w-full flex flex-col gap-2 px-2 py-4">
      {navItems.map(item => {
        const isActive = pathname.startsWith(item.path);
        return (
          <Link key={item.path} href={item.path}>
            <Button
              variant={'ghost'}
              className={cn(
                'w-full gap-2 justify-start max-md:full',

                isActive && 'bg-accent'
              )}
            >
              <item.icon size={16} />

              <span>{!isMobile ? item.label : item.labelMobile}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
