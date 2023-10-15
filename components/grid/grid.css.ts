import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const spaceVar = createVar();
const minWidth = createVar();

const gridBase = style({
  display: 'grid',
  gridGap: spaceVar,
  alignContent: 'start',
  gridTemplateColumns: `repeat(auto-fill, minmax(min(${minWidth}, 100%), 1fr))`,

  vars: {
    [spaceVar]: vars.spacing.base,
    [minWidth]: '100%',
  },
});

export const grid = recipe({
  base: gridBase,

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

    minWidth: {
      xl: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 48),
        },
      },
      lg: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 32),
        },
      },
      md: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 20),
        },
      },
      base: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 16),
        },
      },
      sm: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 12),
        },
      },
      xs: {
        vars: {
          [minWidth]: calc.multiply(vars.spacing.base, 8),
        },
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
