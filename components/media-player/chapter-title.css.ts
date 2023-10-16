import { style } from '@vanilla-extract/css';

export const title = style({
  display: 'inline-block',
  fontSize: 14,
  fontWeight: 500,
  fontFamily: 'sans-serif',
  color: 'rgba(255 255 255 / 0.64)',
  flex: '1 1 0%',
  paddingInline: 8,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',

  selectors: {
    '&:before': {
      content: "'\\2022'",
      display: 'inline-block',
      marginRight: 6,
      color: 'rgba(255 255 255 / 0.64)',
    },

    '&:empty:before': {
      content: "''",
      marginLeft: 0,
    },
  },
});
