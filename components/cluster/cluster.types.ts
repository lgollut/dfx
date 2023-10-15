import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { ClusterVariants } from './cluster.css';

export type ClusterProps<TUse extends ElementType> = {
  use?: TUse;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  'use'
> &
  ClusterVariants;
