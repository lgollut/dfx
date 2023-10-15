import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const ratio = createVar();

const baseFrame = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  maxWidth: '100%',
  maxHeight: '100%',
  height: 'min-content',

  overflow: 'hidden',

  aspectRatio: ratio,
});

export const frame = recipe({
  base: baseFrame,

  variants: {
    ratio: {
      '1:1': {
        vars: {
          [ratio]: '1 / 1',
        },
      },
      '3:2': {
        vars: {
          [ratio]: '3 / 2',
        },
      },
      '2:3': {
        vars: {
          [ratio]: '2 / 3',
        },
      },
      '4:3': {
        vars: {
          [ratio]: '4 / 3',
        },
      },
      '16:9': {
        vars: {
          [ratio]: '16 / 9',
        },
      },
      '9:16': {
        vars: {
          [ratio]: '9 / 16',
        },
      },
    },
  },
});

globalStyle(`${baseFrame} > img`, {
  inlineSize: '100%',
  blockSize: '100%',
  objectFit: 'cover',
});

globalStyle(`${baseFrame} > video`, {
  inlineSize: '100%',
  blockSize: '100%',
  objectFit: 'cover',
});
