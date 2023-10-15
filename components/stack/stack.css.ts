import { style, globalStyle } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const baseStack = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const stack = recipe({
  base: baseStack,

  variants: {
    /**
     * The space (margin) between successive sibling elements
     */
    space: {
      '6xl': {},
      '5xl': {},
      '4xl': {},
      '3xl': {},
      '2xl': {},
      xl: {},
      lg: {},
      base: {},
      md: {},
      sm: {},
      xs: {},
      none: {},
    },
  },
});

globalStyle(`${stack.classNames.variants.space['6xl']} > * + *`, {
  marginBlockStart: vars.spacing['6xl'],
});

globalStyle(`${stack.classNames.variants.space['5xl']} > * + *`, {
  marginBlockStart: vars.spacing['5xl'],
});

globalStyle(`${stack.classNames.variants.space['4xl']} > * + *`, {
  marginBlockStart: vars.spacing['4xl'],
});

globalStyle(`${stack.classNames.variants.space['3xl']} > * + *`, {
  marginBlockStart: vars.spacing['3xl'],
});

globalStyle(`${stack.classNames.variants.space['2xl']} > * + *`, {
  marginBlockStart: vars.spacing['2xl'],
});

globalStyle(`${stack.classNames.variants.space.xl} > * + *`, {
  marginBlockStart: vars.spacing.xl,
});

globalStyle(`${stack.classNames.variants.space.lg} > * + *`, {
  marginBlockStart: vars.spacing.lg,
});

globalStyle(`${stack.classNames.variants.space.md} > * + *`, {
  marginBlockStart: vars.spacing.md,
});

globalStyle(`${stack.classNames.variants.space.base} > * + *`, {
  marginBlockStart: vars.spacing.base,
});

globalStyle(`${stack.classNames.variants.space.sm} > * + *`, {
  marginBlockStart: vars.spacing.sm,
});

globalStyle(`${stack.classNames.variants.space.xs} > * + *`, {
  marginBlockStart: vars.spacing.xs,
});

globalStyle(`${stack.classNames.variants.space.none} > * + *`, {
  marginBlockStart: vars.spacing.none,
});

export type StackVariants = RecipeVariants<typeof stack>;
