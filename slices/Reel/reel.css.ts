import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const reelContainer = style({
  width: '100%',
  paddingBlock: vars.spacing.base,

  position: 'relative',
});

export const reelWrapper = style({
  display: 'flex',
  gap: vars.spacing.base,
  overflowX: 'scroll',
  WebkitOverflowScrolling: 'touch',

  scrollSnapType: 'x mandatory',
});

export const reelItem = style({
  flexShrink: 0,
  flexGrow: 0,

  maxWidth: '70vw',

  scrollSnapStop: 'normal',
  scrollSnapAlign: 'center',
});
