import { api } from '@/lib/axios';

type ResumeDownloadPayload = {
  html: string;
  structure: StructureResumeData;
};

const getResumeUrl = async (payload: ResumeDownloadPayload) => {
  const { data } = await api.post('/resume/download', payload, {
    responseType: 'blob',
  });

  return window.URL.createObjectURL(data);
};

type AiGenerationPayload = {
  jobtitle: string;
  jobDescription: string;
};

const generateContentForJob = async (payload: AiGenerationPayload) => {
  const { data } = await api.post('/generate/job-title', payload);

  return data;
};

export const ApiServices = {
  getResumeUrl,
  generateContentForJob,
};
