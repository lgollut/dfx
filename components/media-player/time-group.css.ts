import { style } from '@vanilla-extract/css';

export const group = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 8,
});

export const time = style({
  display: 'inline-block',
  contain: 'content',
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: '0.025em',
});

export const divider = style({
  margin: '0 2.5px',
  color: '#e0e0e0',
});
