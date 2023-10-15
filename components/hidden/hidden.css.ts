import { recipe } from '@vanilla-extract/recipes';

import { utilities } from '@/styles/layers.css';

export const breakpoints = {
  always: 0,
  xsUp: 376,
  xsDown: 567,
  smUp: 568,
  smDown: 767,
  mdUp: 768,
  mdDown: 1023,
  lgUp: 1024,
  lgDown: 1279,
  xlUp: 1280,
  never: Infinity,
} as const;

export const hidden = recipe({
  variants: {
    at: {
      never: {},

      always: {
        display: 'none',
      },

      xsUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (min-width: ${breakpoints.xsUp}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      xsDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (max-width: ${breakpoints.xsDown}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      smUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (min-width: ${breakpoints.smUp}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      smDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (max-width: ${breakpoints.smDown}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      mdUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (min-width: ${breakpoints.mdUp}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      mdDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (max-width: ${breakpoints.mdDown}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      lgUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (min-width: ${breakpoints.lgUp}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      lgDown: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (max-width: ${breakpoints.lgDown}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },

      xlUp: {
        '@layer': {
          [utilities]: {
            '@media': {
              [`screen and (min-width: ${breakpoints.xlUp}px)`]: {
                display: 'none',
              },
            },
          },
        },
      },
    },
  },
});
