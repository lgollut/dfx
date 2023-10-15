import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { container } from '@/components/container/container.css';
import { ContainerProps } from '@/components/container/container.types';

const Container = <TUse extends ElementType = 'div'>(
  props: ContainerProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'div',
    className,
    space = 'base',
    maxWidth = 'base',
    ...rest
  } = props;

  return (
    <Comp
      ref={ref}
      className={clsx(className, container({ space, maxWidth }))}
      {...rest}
    />
  );
};

const WrappedContainer = forwardRef(Container);

export { WrappedContainer as Container };
