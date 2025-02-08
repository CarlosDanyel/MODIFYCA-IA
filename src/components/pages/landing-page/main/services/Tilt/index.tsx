'use client';

import { ReactNode } from 'react';
import Tilt from 'react-parallax-tilt';

type TiltComponentProps = {
  children: ReactNode;
};

export const TiltComponent = ({ children }: TiltComponentProps) => {
  return (
    <Tilt perspective={10000} glareMaxOpacity={0} scale={1}>
      {children}
    </Tilt>
  );
};
