import { ReactNode } from 'react';

import { CenterVariants } from './center.css';

export type CenterProps = {
  children: ReactNode;
  className?: string;
  centerText?: boolean;
} & CenterVariants;
