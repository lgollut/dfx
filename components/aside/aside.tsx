'use client';

import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { aside, sideWidthVar, contentMinWidthVar } from './aside.css';
import { AsideProps } from './aside.types';

const Aside = <TUse extends ElementType>(
  props: AsideProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'div',
    space,
    side = 'left',
    align = 'stretch',
    className,
    sideWidth,
    contentMinWidth = '50%',
    ...rest
  } = props;
  return (
    <Comp
      ref={ref}
      className={clsx(
        className,
        aside({ space, side, align, sideWidth: !!sideWidth }),
      )}
      style={assignInlineVars({
        [sideWidthVar]: sideWidth ?? '',
        [contentMinWidthVar]: contentMinWidth,
      })}
      {...rest}
    />
  );
};

/**
 * A custom element for placing two elements side-by-side. If space permits,
 * the sided element has a set width, and the companion takes up the rest
 * of the available horizontal space. If not, the elements are collapsed into
 * a single column, each taking up 100% of the horizontal space.
 *
 * https://every-layout.dev/layouts/sidebar/
 */
const WrappedAside = forwardRef(Aside);

export { WrappedAside as Aside };
