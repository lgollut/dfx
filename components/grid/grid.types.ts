import { RecipeVariants } from '@vanilla-extract/recipes';
import { ComponentPropsWithoutRef } from 'react';

import { grid } from './grid.css';

export type GridVariants = NonNullable<RecipeVariants<typeof grid>>;

export type GridProps = ComponentPropsWithoutRef<'div'> & GridVariants;
