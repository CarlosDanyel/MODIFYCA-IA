import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import { setDefaultOptions } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ClientProviders } from '@/components/shared/client-providers';

const fontSans = Inter_Tight({
  variable: '--font-sans',
  subsets: ['latin'],
});

const fontTitle = Inter_Tight({
  variable: '--font-title',
  subsets: ['latin'],
});

const fontPage = Inter_Tight({
  variable: '--font-page',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Modifyca',
  description: 'A plataforma de currículos mais completa e fácil de usar.',
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    follow: true,
    index: true,
  },
};

setDefaultOptions({ locale: ptBR });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased ',
          fontTitle.variable,
          fontSans.variable,
          fontPage.variable
        )}
      >
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
