import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const spaceVar = createVar();
export const sideWidthVar = createVar();
export const contentMinWidthVar = createVar();

const baseAside = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: spaceVar,

  vars: {
    [spaceVar]: vars.spacing.base,
    [contentMinWidthVar]: '50%',
  },
});

export const aside = recipe({
  base: baseAside,

  variants: {
    /**
     * The width of the sidebar (empty means not set; defaults to the content width)
     */
    sideWidth: {
      true: {},
    },

    /**
     * Whether the sided element is the :last-child
     */
    side: {
      right: {},
      left: {},
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
     * The space (margin) between the sidebar and non-sidebar
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

globalStyle(`${aside.classNames.variants.sideWidth.true} > *`, {
  flexBasis: sideWidthVar,
});

globalStyle(`${aside.classNames.variants.side.left} > :first-child`, {
  flexGrow: 1,
});

globalStyle(`${aside.classNames.variants.side.left} > :last-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: contentMinWidthVar,
});

globalStyle(`${aside.classNames.variants.side.right} > :first-child`, {
  flexBasis: 0,
  flexGrow: 999,
  minInlineSize: contentMinWidthVar,
});

globalStyle(`${aside.classNames.variants.side.right} > :last-child`, {
  flexGrow: 1,
});
