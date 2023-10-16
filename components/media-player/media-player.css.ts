import { globalStyle, style } from '@vanilla-extract/css';

export const player = style({
  aspectRatio: '16 /9',
  backgroundColor: '#212121',
  borderRadius: 'var(--media-border-radius)',
  color: '#f5f5f5',
  contain: 'layout',
  fontFamily: 'sans-serif',
  overflow: 'hidden',

  vars: {
    '--media-brand': '#f5f5f5',
    '--media-focus-ring-color': '#4e9cf6',
    '--media-focus-ring': '0 0 0 3px var(--media-focus-ring-color)',
    '--media-tooltip-y-offset': '30px',
    '--media-menu-y-offset': '30px',
  },

  selectors: {
    '&[data-focus]:not([data-playing])': {
      boxShadow: 'var(--media-focus-ring)',
    },
  },
});

export const posterStyle = style({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  width: '100%',
  height: '100%',

  selectors: {
    '&[data-visible]': {
      opacity: 1,
    },
  },
});

globalStyle(`${player} video, ${posterStyle}`, {
  borderRadius: 'var(--media-border-radius)',
  width: '100%',
});

globalStyle(`${posterStyle} img`, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
