import { FormAccount } from '@/components/pages/account/form-account';
import { auth } from '@/lib/auth';

export default async function DashboardAccountPage() {
  const session = await auth();

  return <FormAccount user={session?.user} />;
}
