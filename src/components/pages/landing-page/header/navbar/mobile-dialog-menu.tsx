import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { ContactDialog } from '../contact-dialog';

type NavbarProps = {
  infos: string[];
  active: (name: string) => void;
  activeItem: string;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const NavbarMobile = ({
  infos,
  active,
  activeItem,
  setOpen,
  open,
}: NavbarProps) => {
  return (
    <>
      <nav className="gap-9 items-center justify-center text-foreground text-base hidden max-[838px]:flex ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <MenuIcon size={24} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" alignOffset={-16}>
            <DropdownMenuLabel>Menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {infos.map(name => (
              <DropdownMenuItem
                key={name}
                onClick={() => active(name)}
                className={cn(
                  'cursor-pointer bg-transparent px-3.5 py-2 rounded-md transition-colors text-primary-foreground dark:text-primary ',
                  activeItem === name && 'bg-muted  '
                )}
              >
                {name}
              </DropdownMenuItem>
            ))}
            <DropdownMenuItem className=" flex flex-col">
              <Separator className="my-4" />
              <Button onClick={() => setOpen(true)}>Entre em Contato</Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <ContactDialog open={open} setOpen={setOpen} />
    </>
  );
};
