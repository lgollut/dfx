import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const reelContainer = style({
  width: '100%',
  overflow: 'hidden',
  paddingBlock: vars.spacing.base,

  position: 'relative',
});

export const reelWrapper = style({
  display: 'flex',
  gap: vars.spacing.base,
});

export const reelItem = style({
  flexShrink: 0,
  flexGrow: 0,

  maxWidth: '70vw',
});
