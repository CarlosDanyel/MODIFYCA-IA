import { HomePage } from '@/components/pages/landing-page';
import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth();
  return <HomePage user={session?.user} />;
}
