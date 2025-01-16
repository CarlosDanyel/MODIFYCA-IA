import { Separator } from '@/components/ui/separator';
import {
  BicepsFlexed,
  BriefcaseBusiness,
  FileBadge2,
  Globe,
  GraduationCap,
  Languages,
  Share2,
} from 'lucide-react';
import React, { Fragment, useState } from 'react';
import {
  MultipleDragList,
  MultipleDragListItemData,
} from '../multiples-drag-list';
import { ManegeMultipleItemDiaplog } from '../multiples-drag-list/manege-multiple-item-dialog';
import { useFormContext } from 'react-hook-form';

const MultiplesSections = () => {
  const { getValues } = useFormContext();

  const [sectionTrueAdd, setsectionTrueAdd] =
    useState<MultipleDragListItemData | null>(null);

  const [initialData, setInitialData] =
    useState<MultipleDragListItemData | null>(null);

  const sectionsKeys: MultipleDragListItemData[] = [
    {
      formKey: 'socialMedias',
      title: 'Redes Sociais',
      icon: Share2,
      titleKey: 'name',
      descriptionKey: 'username',
    },
    {
      formKey: 'experiences',
      title: 'Experiências',
      icon: BriefcaseBusiness,
      titleKey: 'company',
      descriptionKey: 'position',
    },
    {
      formKey: 'educations',
      title: 'Educação',
      icon: GraduationCap,
      titleKey: 'institution',
      descriptionKey: 'degree',
    },
    {
      formKey: 'skills',
      title: 'Habilidades',
      icon: BicepsFlexed,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'languages',
      title: 'Idiomas',
      icon: Languages,
      titleKey: 'name',
      descriptionKey: 'description',
    },
    {
      formKey: 'certifications',
      title: 'Certificações',
      icon: FileBadge2,
      titleKey: 'name',
      descriptionKey: 'institution',
    },
    {
      formKey: 'projects',
      title: 'Projetos',
      icon: Globe,
      titleKey: 'name',
      descriptionKey: 'description',
    },
  ];

  const onEdit = (section: MultipleDragListItemData, index: number) => {
    const currentValues = getValues();
    const currentItemns = currentValues.content[section.formKey];

    setsectionTrueAdd(section);
    setInitialData(currentItemns[index]);
  };
  return (
    <div>
      {sectionsKeys.map(section => (
        <Fragment key={`multiple-section-${section.title}`}>
          <Separator className="my-5" />
          <MultipleDragList
            data={section}
            onAdd={() => setsectionTrueAdd(section)}
            onEdit={index => onEdit(section, index)}
          />
        </Fragment>
      ))}

      {sectionTrueAdd && (
        <ManegeMultipleItemDiaplog
          initialData={initialData}
          data={sectionTrueAdd}
          open={!!sectionTrueAdd}
          setOpen={value => {
            if (!value) {
              setsectionTrueAdd(null);
              setInitialData(null);
            }
          }}
        />
      )}
    </div>
  );
};

export default MultiplesSections;
