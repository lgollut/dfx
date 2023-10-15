import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { center } from './center.css';
import { CenterProps } from './center.types';

const Center = (
  { maxSize = 'base', centerText = false, className, ...props }: CenterProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(center({ maxSize, centerText }), className)}
      {...props}
    />
  );
};

/**
 * A custom element for centering a block-level element horizontally,
 * with a max-width value representing the typographic measure.
 *
 * https://every-layout.dev/layouts/center
 */
const WrappedCenter = forwardRef(Center);

export { WrappedCenter as Center };
