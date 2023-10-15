import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const spaceVar = createVar();
export const minHeightVar = createVar();

const baseCover = style({
  display: 'flex',
  flexDirection: 'column',

  minBlockSize: minHeightVar,

  vars: {
    [minHeightVar]: 'initial',
  },
});

globalStyle(`${baseCover} > *`, {
  marginBlock: spaceVar,
});

globalStyle(`${baseCover} > :first-child:not([data-cover-center])`, {
  marginBlockStart: 0,
});

globalStyle(`${baseCover} > :last-child:not([data-cover-center])`, {
  marginBlockEnd: 0,
});

globalStyle(`${baseCover} > [data-cover-center]`, {
  marginBlock: 'auto',
});

export const cover = recipe({
  base: baseCover,

  variants: {
    /**
     * Distribution of elements on the cross axis
     */
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },

    /**
     * The minimum space between and around the child elements
     */
    space: {
      xl: {
        vars: {
          [spaceVar]: vars.spacing.xl,
        },
      },
      lg: {
        vars: {
          [spaceVar]: vars.spacing.lg,
        },
      },
      md: {
        vars: {
          [spaceVar]: vars.spacing.md,
        },
      },
      base: {
        vars: {
          [spaceVar]: vars.spacing.base,
        },
      },
      sm: {
        vars: {
          [spaceVar]: vars.spacing.sm,
        },
      },
      xs: {
        vars: {
          [spaceVar]: vars.spacing.xs,
        },
      },
      none: {
        vars: {
          [spaceVar]: vars.spacing.none,
        },
      },
    },
  },
});

export type CoverVariants = RecipeVariants<typeof cover>;
