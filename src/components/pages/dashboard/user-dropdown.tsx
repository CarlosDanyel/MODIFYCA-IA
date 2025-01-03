import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { LogOut, SquareUser } from "lucide-react";

export const UserDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    className="w-full gap-2 justify-start px-2"
                >
                    <Avatar className="w-7 h-7 block">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                    <p>Carlos Danyel Silva Teixeira </p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="center"
                className="w-[var(--radix-dropdown-menu-trigger-width)]"
            >
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link passHref href="/dashboard/account">
                    <DropdownMenuItem className="gap-2">
                        <SquareUser size={16} />
                        Configurações de conta
                    </DropdownMenuItem>
                </Link>
                <Link passHref href="/dashboard/account">
                    <DropdownMenuItem className="gap-2 text-red-500">
                        <LogOut size={16} />
                        Sair
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
