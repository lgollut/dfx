'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { cover, minHeightVar } from './cover.css';
import { CoverProps } from './cover.types';

const Cover = (
  {
    space = 'base',
    align = 'start',
    minHeight = 'initial',
    className,
    ...props
  }: CoverProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(cover({ space, align }), className)}
      style={assignInlineVars({ [minHeightVar]: minHeight })}
      {...props}
    />
  );
};

/**
 * A custom element for covering a block-level element horizontally,
 * with a max-width value representing the typographic measure.
 *
 * The element that should be towards the vertical center of the space
 * is identified with a simple `data-cover-center` attribute.
 *
 * https://every-layout.dev/layouts/cover
 */
const WrappedCover = forwardRef(Cover);

export { WrappedCover as Cover };
