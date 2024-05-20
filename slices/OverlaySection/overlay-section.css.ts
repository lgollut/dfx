import { globalStyle, style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const overlaySection = style({
  position: 'relative',
});

export const overlayWrapper = style({
  position: 'relative',

  '@media': {
    'screen and (min-width: 1024px)': {
      position: 'static',
    },
  },
});

export const overlayBackground = style({
  position: 'absolute',
  height: '100%',
  width: '100%',

  transform: 'scaleY(-1)',
});

export const overlay = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: `min(${vars.spacing['5xl']}, 4vw)`,

  width: '100%',
  height: '100%',
  padding: `min(${vars.spacing['5xl']}, 4vw)`,

  backgroundColor: `hsl(${vars.hsl.surface} / 0.5)`,
  backdropFilter: 'blur(25px)',

  '@media': {
    'screen and (min-width: 1024px)': {
      flexDirection: 'row',
      alignItems: 'center',

      height: 'auto',

      position: 'absolute',
      bottom: '10%',
      insetInlineStart: 0,
    },
  },
});

globalStyle(`${overlay} > *`, {
  flex: '1 1 100%',
});
