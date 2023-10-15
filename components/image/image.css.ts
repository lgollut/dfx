import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const tintVar = createVar();

const baseImage = style({
  position: 'relative',

  '::after': {
    width: '100%',
    height: '100%',

    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: tintVar,
    mixBlendMode: 'soft-light',
  },
});

export const image = recipe({
  base: baseImage,

  variants: {
    cover: {
      true: {
        width: '100%',
        height: '100%',
        position: 'relative',
      },
    },

    tint: {
      none: {},

      primary: {
        '::after': {
          content: "''",
        },

        vars: {
          [tintVar]: vars.color.primary,
        },
      },
      secondary: {
        '::after': {
          content: "''",
        },

        vars: {
          [tintVar]: vars.color.secondary,
        },
      },
    },
  },
});

globalStyle(`${image.classNames.base} > img`, {
  maxWidth: '100%',
  height: 'auto',
});

globalStyle(`${image.classNames.variants.cover} > img`, {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  insetInlineStart: 0,
  objectPosition: 'center',
  objectFit: 'cover',
});
