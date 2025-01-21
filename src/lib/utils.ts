import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import colors from 'tailwindcss/colors';
import tailwindConfig from '../../tailwind.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sectionIsEmpty = (
  section: ResumeSections,
  data: ResumeContentData
) => {
  switch (section) {
    case 'summary':
      return data.summary === '' || data.summary === '<p></p>';
    default:
      return data[section].length === 0;
  }
};

export const getHighResImage = (url: string, size: number) => {
  if (!url) return null;

  return url.replace(/=s\d+(?:-c)?$/, `=s${size}-c`);
};

export const formatTailwindHTML = (
  html: string,
  structure: StructureResumeData
) => {
  const colorKey = structure.colorTheme as keyof typeof colors;

  return `
  <html>
    <head>
      <script src="https://cdn.tailwindcss.com"></script>
      <script>
          tailwind.config = ${JSON.stringify(tailwindConfig)}
        document.documentElement.style.setProperty(
          '--resume-primary',
         "${colors[colorKey][500]}"
        );
      </script>
    </head>

    <body>
        ${html}
    </body>
  </html>
  `;
};

export const isValidJson = (json: string) => {
  try {
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
};
