import { style, createVar } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';
import { typography } from '@/styles/typography.css';

const colorVar = createVar();

const baseText = style({
  color: colorVar,

  vars: {
    [colorVar]: vars.color.onSurface,
  },
});

export const text = recipe({
  base: baseText,

  variants: {
    variant: {
      labelLarge: typography.labelLarge,
      labelMedium: typography.labelMedium,
      labelSmall: typography.labelSmall,
      bodyLarge: typography.bodyLarge,
      bodyMedium: typography.bodyMedium,
      bodySmall: typography.bodySmall,
    },

    color: {
      primary: {
        vars: {
          [colorVar]: vars.color.primary,
        },
      },

      muted: {
        vars: {
          [colorVar]: vars.color.onSurfaceMuted,
        },
      },

      current: {
        vars: {
          [colorVar]: 'currentColor',
        },
      },
    },

    align: {
      end: {
        textAlign: 'end',
      },
    },
  },
});
