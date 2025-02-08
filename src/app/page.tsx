import { HomePage } from '@/components/pages/landingPage';
import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth();
  return <HomePage user={session?.user} />;
}
