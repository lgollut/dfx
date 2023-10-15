import { createTheme } from '@vanilla-extract/css';

import { vars } from './contract.css';
import { ref } from './ref.css';

const typeface = {
  plain: 'var(--font-plain)',
};

export const themeClass = createTheme(vars, {
  color: {
    primary: ref.palette.primary30,
    onPrimary: ref.palette.primary100,

    secondary: ref.palette.secondary30,
    onSecondary: ref.palette.secondary100,

    surfaceDim: ref.palette.neutral13,
    surface: ref.palette.neutral2,
    surfaceBright: ref.palette.neutral2,
    onSurface: ref.palette.neutral90,
    onSurfaceMuted: ref.palette.neutralVariant50,

    surfaceContainerLowest: ref.palette.neutral0,
    surfaceContainerLow: ref.palette.neutral4,
    surfaceContainer: ref.palette.neutral6,
    surfaceContainerHigh: ref.palette.neutral8,
    surfaceContainerHighest: ref.palette.neutral10,

    outline: ref.palette.neutral50,
    outlineVariant: ref.palette.neutral20,
  },

  hsl: {
    surfaceDim: ref.hsl.neutral13,
    surface: ref.hsl.neutral2,
    surfaceBright: ref.hsl.neutral2,
    onSurface: ref.hsl.neutral80,
    onSurfaceMuted: ref.hsl.neutral40,

    surfaceContainerLowest: ref.hsl.neutral100,
    surfaceContainerLow: ref.hsl.neutral4,
    surfaceContainer: ref.hsl.neutral6,
    surfaceContainerHigh: ref.hsl.neutral8,
    surfaceContainerHighest: ref.hsl.neutral10,

    outline: ref.hsl.neutral50,
    outlineVariant: ref.hsl.neutral20,
  },

  state: {
    hovered: {
      opacity: '0.08',
    },
    focused: {
      opacity: '0.12',
    },
    pressed: {
      opacity: '0.12',
    },
  },

  typeface,

  type: {
    display: {
      large: {
        font: typeface.plain,
        size: ref.fontSize['12xl'],
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize['7xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1em',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize['6xl'],
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    headline: {
      large: {
        font: typeface.plain,
        size: ref.fontSize['7xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize['3xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize['2xl'],
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1.3em',
      },
    },

    title: {
      large: {
        font: typeface.plain,
        size: ref.fontSize.xl,
        weight: ref.fontWeight.regular,
        tracking: '0',
        lineHeight: '1em',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.base,
        weight: ref.fontWeight.bold,
        tracking: '0.15px',
        lineHeight: '24px',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    label: {
      large: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.bold,
        tracking: '0.1px',
        lineHeight: '20px',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.xs,
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize['2xs'],
        weight: ref.fontWeight.bold,
        tracking: '0',
        lineHeight: '1em',
      },
    },

    body: {
      large: {
        font: typeface.plain,
        size: ref.fontSize.base,
        weight: ref.fontWeight.regular,
        tracking: '0.5px',
        lineHeight: '24px',
      },
      medium: {
        font: typeface.plain,
        size: ref.fontSize.sm,
        weight: ref.fontWeight.regular,
        tracking: '0.25px',
        lineHeight: '20px',
      },
      small: {
        font: typeface.plain,
        size: ref.fontSize.xs,
        weight: ref.fontWeight.regular,
        tracking: '0.4px',
        lineHeight: '16px',
      },
      smaller: {
        font: typeface.plain,
        size: ref.fontSize['2xs'],
        weight: ref.fontWeight.regular,
        tracking: '0.2px',
        lineHeight: '14px',
      },
    },
  },

  spacing: ref.spacing,

  radius: ref.radius,

  elevation: ref.elevation,

  duration: ref.duration,

  easing: ref.easing,
});
