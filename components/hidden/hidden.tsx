import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef, useMemo } from 'react';

import { HiddenJs } from '@/components/hidden/hidden-js';
import { hidden } from '@/components/hidden/hidden.css';
import { HiddenProps } from '@/components/hidden/hidden.types';

const Hidden = <TUse extends ElementType>(
  props: HiddenProps<TUse>,
  ref: ForwardedRef<'any'>,
) => {
  const {
    use: Comp = 'div',
    at = 'never',
    useCss = false,
    isSlice = false,
    className,
    ...rest
  } = props;

  const rendered = useMemo(
    () => (
      <Comp
        ref={ref}
        className={clsx(useCss && hidden({ at }), className)}
        {...rest}
      />
    ),
    [at, className, rest, Comp, ref, useCss],
  );

  if (useCss) {
    return rendered;
  }

  return <HiddenJs at={at}>{rendered}</HiddenJs>;
};

const WrappedHidden = forwardRef(Hidden);

export { WrappedHidden as Hidden };
