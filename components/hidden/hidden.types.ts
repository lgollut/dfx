import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef, ElementType } from 'react';

import { hidden } from '@/components/hidden/hidden.css';
import { DistributiveOmit } from '@/types/distributive-omit';

export type HiddenVariants = NonNullable<RecipeVariants<typeof hidden>>;

export type HiddenProps<TUse extends ElementType> = {
  use?: TUse;
  useCss?: boolean;
  isSlice?: boolean;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  'use' | 'with'
> &
  HiddenVariants;
