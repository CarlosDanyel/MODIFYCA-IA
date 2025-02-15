import { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons/lib';

type SectionTitleProps = {
  title: string;
  icon: LucideIcon | IconType;
};

const SectionTitle = ({ icon: Icon, title }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-2">
      <Icon size={18} className="text-muted-foreground " />
      <h3 className="text-2xl font-title font-bold">{title}</h3>
    </div>
  );
};

export default SectionTitle;
