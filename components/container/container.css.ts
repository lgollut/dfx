import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const spaceVar = createVar();
const maxWidthVar = createVar();

const containerBase = style({
  width: '100%',
  maxWidth: maxWidthVar,
  marginInline: 'auto',

  paddingInline: spaceVar,
});

export const container = recipe({
  base: containerBase,

  variants: {
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

    maxWidth: {
      md: {
        vars: {
          [maxWidthVar]: '1728px',
        },
      },
      base: {
        vars: {
          [maxWidthVar]: '1280px',
        },
      },
      small: {
        vars: {
          [maxWidthVar]: '960px',
        },
      },
      extraSmall: {
        vars: {
          [maxWidthVar]: '768px',
        },
      },
    },
  },
});
