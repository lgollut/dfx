import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { heading, headingWrapper } from './heading.css';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps<TUse extends HeadingTypes> = {
  use?: TUse;
  subtitle?: string;
  rootClassName?: string;
} & DistributiveOmit<
  ComponentPropsWithRef<HeadingTypes extends TUse ? 'h1' : TUse>,
  "use'"
> &
  HeadingVariants &
  HeadingWrapperVariants;

export type HeadingVariants = NonNullable<RecipeVariants<typeof heading>>;

export type HeadingWrapperVariants = NonNullable<
  RecipeVariants<typeof headingWrapper>
>;
