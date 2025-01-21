'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from './theme-provider';
import { Toaster } from 'sonner';
import { QueryClientProvider } from '@tanstack/react-query';
import { useTanStackQuery } from '@/lib/tanstack-query';

type ClientProvidersProps = {
  children: ReactNode;
};
export const ClientProviders = ({ children }: ClientProvidersProps) => {
  const queryClient = useTanStackQuery();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster
          expand
          toastOptions={{
            unstyled: false,
            classNames: {
              success: 'dark:text-green-300 bg-background border border-muted ',
              error: 'dark:text-red-400 bg-background border border-muted ',
            },
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
};
