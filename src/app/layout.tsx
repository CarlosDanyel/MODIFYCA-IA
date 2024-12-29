import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

const fontTitle = Nunito({
    variable: "--font-nunito",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Viza",
    description: "Crie o seu curriculo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body className={cn(fontTitle.variable, fontSans.variable)}>
                {children}
            </body>
        </html>
    );
}
