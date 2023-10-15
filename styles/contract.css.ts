import { createThemeContract } from '@vanilla-extract/css';

const typeContract = {
  font: null,
  size: null,
  weight: null,
  lineHeight: null,
  tracking: null,
};

export const vars = createThemeContract({
  color: {
    primary: null,
    onPrimary: null,

    secondary: null,
    onSecondary: null,

    surfaceDim: null,
    surface: null,
    surfaceBright: null,
    onSurface: null,
    onSurfaceMuted: null,

    surfaceContainerLowest: null,
    surfaceContainerLow: null,
    surfaceContainer: null,
    surfaceContainerHigh: null,
    surfaceContainerHighest: null,

    outline: null,
    outlineVariant: null,
  },

  hsl: {
    surfaceDim: null,
    surface: null,
    surfaceBright: null,
    onSurface: null,
    onSurfaceMuted: null,

    surfaceContainerLowest: null,
    surfaceContainerLow: null,
    surfaceContainer: null,
    surfaceContainerHigh: null,
    surfaceContainerHighest: null,

    outline: null,
    outlineVariant: null,
  },

  state: {
    hovered: {
      opacity: null,
    },
    focused: {
      opacity: null,
    },
    pressed: {
      opacity: null,
    },
  },

  typeface: {
    plain: null,
  },

  type: {
    display: {
      large: typeContract,
      medium: typeContract,
      small: typeContract,
    },

    headline: {
      large: typeContract,
      medium: typeContract,
      small: typeContract,
    },

    title: {
      large: typeContract,
      medium: typeContract,
      small: typeContract,
    },

    label: {
      large: typeContract,
      medium: typeContract,
      small: typeContract,
    },

    body: {
      large: typeContract,
      medium: typeContract,
      small: typeContract,
      smaller: typeContract,
    },
  },

  spacing: {
    none: null,
    '2xs': null,
    xs: null,
    sm: null,
    base: null,
    md: null,
    lg: null,
    xl: null,
    '2xl': null,
    '3xl': null,
    '4xl': null,
    '5xl': null,
    '6xl': null,
    '7xl': null,
    '8xl': null,
    '9xl': null,
  },

  radius: {
    none: null,
    xs: null,
    sm: null,
    base: null,
    md: null,
    lg: null,
    xl: null,
    full: null,
  },

  elevation: {
    0: null,
    1: null,
    3: null,
    6: null,
    8: null,
    12: null,
  },

  duration: {
    shorter: null,
    short: null,
    base: null,
    long: null,
  },

  easing: {
    inOut: null,
  },
});
