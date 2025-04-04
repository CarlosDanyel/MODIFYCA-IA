import { Skeleton } from '@/components/ui/skeleton';

export default function LoginLoadingPage() {
  return (
    <div className="grid grid-cols-2 gap-2 h-screen w-full">
      <Skeleton className=" w-full h-full " />
    </div>
  );
}
