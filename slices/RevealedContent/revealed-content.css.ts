import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const container = style({
  overflow: 'hidden',

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

export const content = style({
  width: 'calc(100% / 3)',
  height: '100%',
  padding: `${vars.spacing['5xl']} ${vars.spacing.base}`,

  position: 'absolute',
  top: 0,
  insetInlineStart: 0,
  zIndex: 1,

  backgroundColor: `hsl(${vars.hsl.surface} / 0.5)`,
  backdropFilter: 'blur(25px)',
});

export const image = style({
  transform: 'translateX(140px)',
});

export const stack = style({
  alignSelf: 'flex-start',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  gap: vars.spacing.base,

  height: '100%',
});
