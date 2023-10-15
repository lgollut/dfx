import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { frame } from './frame.css';

export type FrameVariants = NonNullable<RecipeVariants<typeof frame>>;

export type FrameProps<TUse extends ElementType> = {
  use?: TUse;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  'use'
> &
  FrameVariants;
