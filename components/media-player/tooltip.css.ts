import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

import { menu } from './menu.css';

const enterTransform = createVar();
const exitTransform = createVar();

const mediaTooltipEnter = keyframes({
  from: {
    opacity: 0,
    transform: exitTransform,
  },
  to: {
    opacity: 1,
    transform: enterTransform,
  },
});

const mediaTooltipExit = keyframes({
  from: {
    opacity: 1,
    transform: enterTransform,
  },
  to: {
    opacity: 0,
    transform: exitTransform,
  },
});

export const tooltip = style({
  display: 'inline-block',
  color: 'hsl(0, 0%, 80%)',
  backgroundColor: 'black',
  fontSize: 13,
  fontWeight: 500,
  opacity: 0,
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  zIndex: 10,
  borderRadius: 2,
  padding: '2px 8px',
  willChange: 'transform, opacity',

  vars: {
    [enterTransform]: 'translateY(0px) scale(1)',
    [exitTransform]: 'translateY(12px) scale(0.8)',
  },

  selectors: {
    '&[data-placement~="bottom"]': {
      vars: {
        [exitTransform]: 'translateY(-12px) scale(0.8)',
      },
    },

    '&[data-visible]': {
      animationName: mediaTooltipEnter,
      animationDuration: '0.2s',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
    },

    '&:not([data-visible])': {
      animationName: mediaTooltipExit,
      animationDuration: '0.2s',
      animationTimingFunction: 'ease-out',
    },
  },
});

globalStyle(`${menu} ${tooltip}`, {
  display: 'none !important',
});
