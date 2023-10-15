import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { text } from './text.css';

export type TextProps<TUse extends ElementType> = {
  use?: TUse;
  className?: string;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'span' : TUse>,
  "use'"
> &
  TextVariants;

export type TextVariants = NonNullable<RecipeVariants<typeof text>>;
