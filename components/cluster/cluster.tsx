import { clsx } from 'clsx';
import { forwardRef, ForwardedRef, ElementType } from 'react';

import { cluster } from './cluster.css';
import { ClusterProps } from './cluster.types';

const Cluster = <TUse extends ElementType>(
  props: ClusterProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'div',
    space = 'base',
    justify = 'start',
    align = 'center',
    grow,
    className,
    ...rest
  } = props;
  return (
    <Comp
      ref={ref}
      className={clsx(className, cluster({ space, justify, align, grow }))}
      {...rest}
    />
  );
};

/**
 * A custom element for grouping items, with control over the margin between them
 *
 * https://every-layout.dev/layouts/cluster
 */
const WrappedCluster = forwardRef(Cluster);

export { WrappedCluster as Cluster };
