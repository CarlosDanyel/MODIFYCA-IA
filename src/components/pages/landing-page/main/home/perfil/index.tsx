'use client';

import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type PerfilProps = {
  children?: ReactNode;
  className?: string;
};

export const Perfil = ({ children, className }: PerfilProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: (Math.random() - 0.5) * 100,
      y: (Math.random() - 0.5) * 100,
    });
    const interval = setInterval(() => {
      setPosition({
        x: (Math.random() - 0.6) * 100,
        y: (Math.random() - 0.5) * 100,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className={cn('absolute', className)}
    >
      {children}
    </motion.div>
  );
};
