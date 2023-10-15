import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { grid } from './grid.css';
import { GridProps } from './grid.types';

const Grid = (
  { minWidth = 'base', space, className, fullWidth, ...props }: GridProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <div
      ref={ref}
      className={clsx(grid({ minWidth, space, fullWidth }), className)}
      {...props}
    />
  );
};

/**
 * A custom element for creating a responsive grid using the CSS Grid module
 *
 * https://every-layout.dev/layouts/grid
 */
const WrappedGrid = forwardRef(Grid);

export { WrappedGrid as Grid };
