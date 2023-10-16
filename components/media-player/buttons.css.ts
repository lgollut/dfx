import { globalStyle, style } from '@vanilla-extract/css';

/*************************************************************************************************
 * Buttons
 *************************************************************************************************/
export const button = style({
  display: 'inline-flex',
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  color: 'white',
  borderRadius: 8,
  cursor: 'pointer',
  padding: 0,
  userSelect: 'none',
  appearance: 'none',
  background: 'none',
  outline: 'none',
  border: 'none',
  touchAction: 'manipulation',
  WebkitUserSelect: 'none',
  WebkitTapHighlightColor: 'transparent',

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        backgroundColor: 'rgb(255 255 255 / 0.2)',
      },
    },
  },

  selectors: {
    "&[aria-hidden='true']": {
      display: 'none',
    },
  },
});

globalStyle(`${button} > svg`, {
  width: '80%',
  height: '80%',
  borderRadius: 2,
});

globalStyle(`${button}[data-focus] > svg`, {
  boxShadow: 'var(--focus-ring)',
});
