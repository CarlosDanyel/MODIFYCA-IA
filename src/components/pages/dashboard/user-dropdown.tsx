'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { LogOut, SquareUser, User2Icon } from 'lucide-react';
import { User } from 'next-auth';
import { signOut } from 'next-auth/react';
import { useIsMobile } from '@/hook/use-isMobile';
import React from 'react';

type UserDropdownProps = {
  user?: User;
};

export const UserDropdown = ({ user }: UserDropdownProps) => {
  const isMobile = useIsMobile(768);

  if (!user) return null;

  const initials = user?.name
    ?.split('')
    ?.splice(0, 2)
    .map(name => name[0].toUpperCase())
    .join('');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {!isMobile ? (
          <Button
            variant={'ghost'}
            className="w-full gap-2 justify-start px-2 "
          >
            <Avatar className="w-7 h-7 block">
              <AvatarImage src={user?.image ?? ''} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <p>{user.name}</p>
          </Button>
        ) : (
          <Button
            variant={'secondary'}
            className="w-full gap-2 justify-start px-2"
          >
            <User2Icon />
            Minha Conta
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="lg:w-[var(--radix-dropdown-menu-trigger-width)] max-md:ml-3  max-md:mb-2 "
      >
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link passHref href="/dashboard/account">
          <DropdownMenuItem className="gap-2">
            <SquareUser size={16} />
            Configurações de conta
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: '/auth/login' })}
          className="gap-2 text-red-500"
        >
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
