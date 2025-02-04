'use client';

import { BuyCreditsDialog } from '@/components/pages/dashboard/resume/infos-sidebar/ai-generation-dropdown/buy-credits-dialog';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { queyKeys } from '@/constants/querys-keys';
import { ApiServices } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { BadgeCent, SquareUser } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function DashboardAccountPage() {
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  const pathname = usePathname();

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
    <>
      <h1 className="font-title font-bold text-3xl flex items-center gap-2">
        <SquareUser size={25} className="text-muted-foreground" />
        Configurações de conta
      </h1>

      <Separator className="my-6" />

      <section>
        <div className="flex items-center gap-1">
          Você possui{''}
          <strong className="text-foreground inline-flex gap-0.5 items-center">
            <BadgeCent size={14} />
            {isLoading ? <Skeleton className="w-5 h-5" /> : credits} {''}
            {credits === 1 ? 'Crédito' : 'Crédito'}
          </strong>
        </div>

        <p className="text-muted-foreground mt-2">
          Créditos são ultilizados para gerar conteúdo para seus currículos com
          inteligência artificial.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <Button
            variant={'secondary'}
            disabled={isLoading || isPending}
            onClick={() => setShowCreditsModal(true)}
          >
            Adiconar Créditos
          </Button>
          <Button
            variant={'outline'}
            disabled={isLoading || isPending}
            onClick={() => handleOpenTransactions()}
          >
            Minhas Transações
          </Button>
        </div>
      </section>

      <BuyCreditsDialog open={showCreditsModal} setOpen={setShowCreditsModal} />
    </>
  );
}
