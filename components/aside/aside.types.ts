import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { aside } from './aside.css';

export type AsideProps<TUse extends ElementType> = {
  use?: TUse;

  /**
   * The width of the sidebar (empty means not set; defaults to the content width)
   */
  sideWidth?: string;

  /**
   * The narrowest the content (main) element can be before wrapping.
   * Should be a percentage.
   */
  contentMinWidth?: string;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  'use' | 'sideWidth' | 'contentMinWidth'
> &
  Omit<AsideVariants, 'sideWidth'>;

export type AsideVariants = NonNullable<RecipeVariants<typeof aside>>;
