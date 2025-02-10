import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavbarProps = {
  infos: string[];
  active: (name: string) => void;
  activeItem: string;
  setOpen: (open: boolean) => void;
};

export const Navbar = ({ infos, active, activeItem, setOpen }: NavbarProps) => {
  return (
    <>
      <div className="flex max-[838px]:hidden">
        <nav className="flex gap-9 items-center justify-center text-foreground text-base">
          {infos.map(name => (
            <span
              key={name}
              onClick={() => active(name)}
              className={cn(
                'cursor-pointer bg-transparent px-3.5 py-2  rounded-md transition-colors text-primary-foreground dark:text-primary ',
                activeItem === name &&
                  'bg-white text-primary dark:text-primary-foreground'
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
            className="py-3 px-6 rounded-md font-semibold font-page flex gap-2"
            onClick={() => setOpen(true)}
          >
            Entre em Contato
          </Button>
        </div>
      </div>
    </>
  );
};
