import { ReactNode } from 'react';

import { CoverVariants } from './cover.css';

export type CoverProps = {
  children: ReactNode;
  className?: string;
  /**
   * The minimum height (block-size) of the parent element, before it grows to accommodate its content
   */
  minHeight?: string;
} & CoverVariants;
