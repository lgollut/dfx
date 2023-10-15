import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';
import { typography } from '@/styles/typography.css';

const colorVar = createVar();

const baseHeading = style({
  color: colorVar,

  vars: {
    [colorVar]: vars.color.onSurface,
  },
});

export const heading = recipe({
  base: baseHeading,

  variants: {
    variant: {
      displayLarge: typography.displayLarge,
      displayMedium: typography.displayMedium,
      displaySmall: typography.displaySmall,
      headlineLarge: typography.headlineLarge,
      headlineMedium: typography.headlineMedium,
      headlineSmall: typography.headlineSmall,
      titleLarge: typography.titleLarge,
      titleMedium: typography.titleMedium,
      titleSmall: typography.titleSmall,
      h1: typography.headlineLarge,
      h2: typography.headlineMedium,
      h3: typography.headlineSmall,
      h4: typography.titleLarge,
      h5: typography.titleMedium,
      h6: typography.titleSmall,
    },

    style: {
      italic: {
        fontStyle: 'italic',
      },
    },

    transform: {
      uppercase: {
        textTransform: 'uppercase',
      },
    },

    color: {
      current: {
        vars: {
          [colorVar]: 'currentColor',
        },
      },
      muted: {
        vars: {
          [colorVar]: vars.color.onSurfaceMuted,
        },
      },
    },
  },
});

export const subtitleStyle = style([
  typography.titleMedium,
  {
    color: vars.color.onSurface,
  },
]);

export const headingWrapper = recipe({
  variants: {
    border: {
      true: {
        paddingBottom: vars.spacing.base,
        borderBottom: `1px solid ${vars.color.outlineVariant}`,
      },
    },

    align: {
      start: {
        textAlign: 'start',
      },

      center: {
        textAlign: 'center',
      },

      end: {
        textAlign: 'end',
      },

      justify: {
        textAlign: 'justify',
      },
    },
  },
});
