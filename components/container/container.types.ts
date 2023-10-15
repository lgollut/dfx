import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithRef, ElementType } from 'react';

import { container } from '@/components/container/container.css';
import { DistributiveOmit } from '@/types/distributive-omit';

export type ContainerProps<TUse extends ElementType> = {
  use?: TUse;
} & DistributiveOmit<
  ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
  "use'"
> &
  CenterVariants;

export type CenterVariants = NonNullable<RecipeVariants<typeof container>>;
