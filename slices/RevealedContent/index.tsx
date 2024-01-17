'use client';

import { type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { useIsClient } from '@uidotdev/usehooks';
import { ReactNode } from 'react';

import { ConcertsSlice } from '@/slices/RevealedContent/concerts';

/**
 * Props for `RevealedContent`.
 */
export type RevealedContentProps = {
  context: { concerts: Content.ConcertDocument[] };
} & SliceComponentProps<Content.RevealedContentSlice>;

/**
 * Component for "RevealedContent" Slices.
 */
const RevealedContent = ({
  slice,
  ...rest
}: RevealedContentProps): ReactNode => {
  const isClient = useIsClient();

  if (!isClient || slice.variation === 'default') {
    return null;
  }

  return <ConcertsSlice slice={slice} {...rest} />;
};

export default RevealedContent;
