'use client';

import { BuyCreditsDialog } from '@/components/pages/dashboard/resume/infos-sidebar/ai-generation-dropdown/buy-credits-dialog';
import { Button } from '@/components/ui/button';
import InputField from '@/components/ui/input/field';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { queyKeys } from '@/constants/querys-keys';
import { ApiServices } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BadgeCent, CircleUserIcon, SquareUser } from 'lucide-react';
import { User } from 'next-auth';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

type FormAccountProps = {
  user?: User | undefined;
};

export const FormAccount = ({ user }: FormAccountProps) => {
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const pathname = usePathname();

  const methods = useForm<User>({
    defaultValues: {
      email: user?.email || '',
      name: user?.name || '',
      image: user?.image || '',
    },
  });

  const { mutate: handleOpenTransactions, isLoading: isPending } = useMutation({
    mutationFn: () => ApiServices.getPortalUrl(pathname),
    onSuccess: url => {
      location.href = url;
    },
  });

  const { data: credits, isLoading } = useQuery({
    queryKey: queyKeys.credits,
    queryFn: ApiServices.getCredits,
  });

  return (
    <FormProvider {...methods}>
      <h1 className="font-title font-bold text-2xl flex items-center gap-2 ">
        <SquareUser
          size={20}
          className="text-muted-foreground hidden md:flex"
        />
        Configurações de conta
      </h1>

      <Separator className="my-6" />

      <section>
        <div className="flex items-start gap-1 flex-col md:flex-row">
          Você possui{' '}
          <strong className="text-foreground inline-flex gap-0.5 items-center">
            <BadgeCent size={14} />
            {isLoading ? <Skeleton className="w-5 h-5" /> : credits} {''}
            {credits === 1 ? 'Crédito' : 'Créditos'}
          </strong>
        </div>

        <p className="text-muted-foreground mt-2">
          Créditos são utilizados para gerar conteúdo para seus currículos com
          inteligência artificial.
        </p>

        <div className="flex items-start gap-4 mt-4 flex-col md:flex-row">
          <Button
            variant={'secondary'}
            disabled={isLoading || isPending}
            onClick={() => setShowCreditsModal(true)}
          >
            Adicionar Créditos
          </Button>
          <Button
            variant={'outline'}
            disabled={isLoading || isPending}
            onClick={() => handleOpenTransactions()}
          >
            Minhas Transações
          </Button>
        </div>
        <Separator className="my-6" />
      </section>

      <h2 className="font-title font-bold text-2xl flex items-center gap-2 ">
        <CircleUserIcon
          size={20}
          className="text-muted-foreground hidden md:flex"
        />
        Dados de Usuário
      </h2>
      <section className="flex gap-4 mt-4 flex-col md:flex-row">
        <InputField
          control={methods.control}
          label="Nome Completo:"
          name="name"
          disabled={true}
        />
        <InputField
          control={methods.control}
          label="Email do Usuário:"
          name="email"
          disabled={true}
        />
        <InputField
          control={methods.control}
          label="Imagem de Usuário:"
          name="image"
          disabled={true}
        />
      </section>
      <Separator className="my-6" />

      <BuyCreditsDialog open={showCreditsModal} setOpen={setShowCreditsModal} />
    </FormProvider>
  );
};
