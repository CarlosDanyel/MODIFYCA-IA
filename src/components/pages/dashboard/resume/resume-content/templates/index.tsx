type ResumeTemplateProps = {
  data: ResumeData;
};

export const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const template = data.structure.template;
  return (
    <div
      id="resume-content"
      className="w-[210mm] min-h-[297mm] bg-white text-black font-arial [&_hr]:border-black"
    ></div>
  );
};
