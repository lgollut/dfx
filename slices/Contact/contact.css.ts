import { style } from '@vanilla-extract/css';

export const contact = style({
  position: 'relative',

  '::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundImage:
      'linear-gradient(180deg, #000000 0%, #FFFFFF 52%, #000000 100%)',
    mixBlendMode: 'multiply',
  },
});

export const contactForm = style({
  zIndex: 1,
  width: '100%',

  position: 'relative',

  '@media': {
    '(min-width: 768px)': {
      width: 'calc(100% / 2)',
    },

    '(min-width: 1024px)': {
      width: 'calc(100% / 3)',
    },
  },
});

export const formBackground = style({
  position: 'absolute',
  height: '100%',
  width: '100%',
});
