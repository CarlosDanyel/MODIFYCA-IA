import { UserRound } from 'lucide-react';
import SectionTitle from '../section-title';
import InputField from '@/components/ui/input/field';
import SwitchField from '@/components/ui/switch/field';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useFormContext } from 'react-hook-form';

const BasicInfoSection = () => {
  const { getValues } = useFormContext<ResumeData>();

  const image = getValues('content.image');
  const name = getValues('content.infos.fullName') as string;

  const initials = name
    ?.split('')
    ?.splice(0, 2)
    .map(name => name[0].toUpperCase())
    .join('');

  console.log(image);

  return (
    <div>
      <SectionTitle title="Informaçoes Básicas" icon={UserRound} />
      <div className="grid grid-cols-2 gap-4 mt-4 w-full">
        <div className="col-span-full w-full flex gap-3 items-end">
          <Avatar className="w-10 h-10 block mb-[.2rem]">
            <AvatarImage src={image.url ?? ''} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>

          <InputField
            label="Foto"
            placeholder="https://..."
            name="content.image.url"
            containerClassName="w-full"
          />
          <SwitchField name="content.image.visible" className="mb-2" />
        </div>
        <InputField label="Nome Completo" name="content.infos.fullName" />
        <InputField label="Cabeçalho" name="content.infos.headline" />
        <InputField label="E-mail" name="content.infos.email" />
        <InputField label="Site" name="content.infos.website" />
        <InputField label="Telefone" name="content.infos.phone" />
        <InputField label="Localização" name="content.infos.location" />
      </div>
    </div>
  );
};

export default BasicInfoSection;
