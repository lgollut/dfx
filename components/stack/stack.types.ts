import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { StackVariants } from './stack.css';

export type StackProps<TUse extends ElementType> = {
  use?: TUse;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  "use'"
> &
  StackVariants;
