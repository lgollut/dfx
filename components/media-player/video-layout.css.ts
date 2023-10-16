/*************************************************************************************************
 * Controls
 *************************************************************************************************/

import { createVar, globalStyle, style } from '@vanilla-extract/css';

const mediaSliderPreviewOffset = createVar();

export const controls = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  zIndex: 10,
  opacity: 0,
  transition: 'opacity 0.2s ease-out',

  selectors: {
    '&[data-visible]': {
      opacity: 1,
      backgroundImage:
        'linear-gradient(to top, rgb(0 0 0 / 0.5), 10%, transparent, 95%, rgb(0 0 0 / 0.3))',
    },
  },
});

export const controlsGroup = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  paddingInline: 8,

  ':last-child': {
    marginTop: -4,
    paddingBottom: 8,
  },
});

export const spacer = style({
  flex: '1 1 0%',
  pointerEvents: 'none',
});

export const muteButton = style({});
export const fullscreenButton = style({});
export const volumeSlider = style({});

globalStyle(`${controls} ${muteButton}`, {
  marginRight: '-5px !important',
  marginLeft: -2.5,
});

globalStyle(`${controls} ${fullscreenButton}`, {
  marginRight: '0 !important',
});

globalStyle(`${controls} ${volumeSlider}`, {
  vars: {
    [mediaSliderPreviewOffset]: '30px',
  },
});

/*************************************************************************************************
 * Gestures
 *************************************************************************************************/

export const gesture = style({
  display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,

  selectors: {
    '&[action="seek:-10"], &[action="seek:10"]': {
      width: '20%',
      zIndex: 1,
    },

    '&[action="seek:10"]': {
      left: 'unset',
      right: 0,
    },

    '&[action="toggle:paused"]': {
      '@media': {
        '(pointer: coarse)': {
          display: 'none',
        },
      },
    },

    '&[action="toggle:controls"]': {
      '@media': {
        'not (pointer: coarse)': {
          display: 'none',
        },
      },
    },
  },
});
