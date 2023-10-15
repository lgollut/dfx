import { createVar, style } from '@vanilla-extract/css';

const tintVar = createVar();

export const hero = style({
  position: 'relative',

  '::after': {
    content: "''",
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundImage:
      'linear-gradient(270deg, rgba(255,255,255,0.70) 48%, rgba(0,0,0,0.70) 87%)',
    mixBlendMode: 'multiply',
  },
});

export const rootTitle = style({
  zIndex: 1,

  position: 'absolute',
  top: '50%',
  left: '10%',

  transform: 'translateY(-50%)',
});

export const title = style({
  marginInlineStart: 'max(-0.7vw, -12px)',
});
