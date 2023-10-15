import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/contract.css';
import { themeClass } from '@/styles/theme.css';
import { typography } from '@/styles/typography.css';

export const html = style({
  minHeight: '100vh',
});

export const body = style([
  themeClass,
  typography.bodyLarge,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    minHeight: '100vh',

    backgroundColor: vars.color.surface,
    color: vars.color.onSurface,

    WebkitFontSmoothing: 'antialiased',
  },
]);
