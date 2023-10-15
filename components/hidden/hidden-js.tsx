'use client';

import { useWindowSize } from '@uidotdev/usehooks';

import { breakpoints } from '@/components/hidden/hidden.css';

import { HiddenJsProps } from './hidden-js.types';

export const HiddenJs = (props: HiddenJsProps) => {
  const { at = 'never', children } = props;

  const size = useWindowSize();

  if (at === 'never' || size.width === null) {
    return null;
  } else if (at === 'always') {
    return children;
  }

  const up = at.includes('Up');

  if (up) {
    return size.width < breakpoints[at] && children;
  } else {
    return size.width > breakpoints[at] && children;
  }
};
