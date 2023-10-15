import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';

export const divider = style({
  height: 1,

  borderWidth: 0,
  borderStyle: 'none',
  backgroundColor: vars.color.outlineVariant,
});
