import { style, createVar } from '@vanilla-extract/css';
import { RecipeVariants, recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const spaceVar = createVar();

const baseCluster = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceVar,
});

export const cluster = recipe({
  base: baseCluster,

  variants: {
    /**
     * Distribution of elements on the main axis
     */
    justify: {
      spaceBetween: {
        justifyContent: 'space-between',
      },
      start: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
    },

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
     * The space (margin) between each of the clustered elements
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

    grow: {
      true: {
        flexGrow: 1,
      },
    },
  },
});

export type ClusterVariants = NonNullable<RecipeVariants<typeof cluster>>;
