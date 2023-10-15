import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { box } from './box.css';
import { BoxProps, Space } from './box.types';

const Box = <TUse extends ElementType = 'div'>(
  {
    className,
    space = 'base',
    color = 'transparent',
    rounded,
    outlined,
    ...props
  }: BoxProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const { use: Comp = 'div', ...rest } = props;
  let spaceBlockStart: Space = 'base';
  let spaceInlineEnd: Space = 'base';
  let spaceBlockEnd: Space = 'base';
  let spaceInlineStart: Space = 'base';

  if (typeof space === 'string') {
    spaceBlockStart = space;
    spaceInlineEnd = space;
    spaceBlockEnd = space;
    spaceInlineStart = space;
  } else if (space.length === 4) {
    [spaceBlockStart, spaceInlineEnd, spaceBlockEnd, spaceInlineStart] = space;
  } else if (space.length === 2) {
    [spaceBlockStart, spaceInlineEnd] = space;
    [spaceBlockEnd, spaceInlineStart] = space;
  }

  return (
    <Comp
      ref={ref}
      className={clsx(
        className,
        box({
          spaceBlockStart,
          spaceInlineEnd,
          spaceBlockEnd,
          spaceInlineStart,
          color,
          rounded,
          outlined,
        }),
      )}
      {...rest}
    />
  );
};

/**
 * A custom element for generic boxes/containers
 *
 * https://every-layout.dev/layouts/box
 */
const WrappedBox = forwardRef(Box);

export { WrappedBox as Box };
