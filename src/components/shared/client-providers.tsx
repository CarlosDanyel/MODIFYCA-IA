'use client';

import { ReactNode, Suspense, useEffect } from 'react';
import { ThemeProvider } from './theme-provider';
import { toast, Toaster } from 'sonner';
import { QueryClientProvider } from '@tanstack/react-query';
import { useTanStackQuery } from '@/lib/tanstack-query';
import { useSearchParams } from 'next/navigation';

const CreditsToast = () => {
  const searchParams = useSearchParams();

  const sucessCheckoutParam = searchParams.get('success');

  useEffect(() => {
    if (sucessCheckoutParam === 'true') {
      toast.success(
        'Compra realizada com sucesso! Seus créditos foram adicionados á sua conta.'
      );
    }
  }, [sucessCheckoutParam]);

  return null;
};

type ClientProvidersProps = {
  children: ReactNode;
};

export const ClientProviders = ({ children }: ClientProvidersProps) => {
  const queryClient = useTanStackQuery();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Suspense>
          <CreditsToast />
        </Suspense>
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
