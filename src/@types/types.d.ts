type ResumesInfosData = {
  fullName: string;
  headline: string;
  email: string;
  website: string;
  phone: string;
  location: string;
};

type RessumeImageData = {
  url: string;
  visible: boolean;
};

type ResumeContentData = {
  image: RessumeImageData;
  infos: ResumesInfosData;
};

type ResumeData = {
  content: ResumeContentData;
  //   structure: ResumeStructureData;
};
