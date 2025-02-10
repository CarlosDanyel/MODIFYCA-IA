import { useEffect, useState } from 'react';

export const useIsMobile = (breakpoint: number) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSizePage = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    checkSizePage();

    window.addEventListener('resize', checkSizePage);

    return () => {
      window.removeEventListener('resize', checkSizePage);
    };
  }, [breakpoint]);

  return isMobile;
};
