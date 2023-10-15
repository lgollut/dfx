import {
  CSSProperties,
  createVar,
  globalStyle,
  style,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '@/styles/contract.css';
import { transition } from '@/styles/transition';

export const progressValue = createVar();
const progressHeight = createVar();
const progressBackground = createVar();

const rangeThumbHeight = createVar();
const rangeThumbBackground = createVar();
const rangeThumbShadow = createVar();
const rangeTrackHeight = createVar();
export const rangeValueVar = createVar();

export const posterVar = createVar();

export const mediaPlayerWrapper = style({
  maxHeight: '100%',
  height: 'unset',
  width: 'auto',

  position: 'relative',

  // selectors: {
  //   '&::after': {
  //     content: '',

  //     width: '100%',
  //     height: '100%',

  //     // position: 'absolute',
  //     top: 0,
  //     insetInlineStart: 0,

  //     backgroundRepeat: 'no-repeat',
  //     backgroundSize: 'cover',
  //     backgroundPosition: '50% 50%',
  //     backgroundImage: posterVar,
  //     zIndex: 1,

  //     pointerEvents: 'none',

  //     transitionProperty: 'opacity',
  //     transitionDuration: vars.duration.base,
  //     transitionTimingFunction: vars.easing.inOut,
  //     /**
  //      * 750ms seems to be enough to hide the `object-fit` issue in safari
  //      */
  //     transitionDelay: '750ms',
  //   },

  //   ':is(.is-playing, .is-paused)&::after': {
  //     opacity: 0,

  //     transitionDelay: '750ms',
  //   },

  //   ':is(.is-loading, .is-initializing)&::after': {
  //     transitionDelay: '0ms',
  //   },
  // },
});

export const mediaPlayerControls = style({
  width: `calc(100% - ${vars.spacing.lg} * 2)`,
  paddingInline: vars.spacing.base,

  position: 'absolute',
  top: `calc(100% - ${vars.spacing.base})`,
  insetInlineStart: vars.spacing.lg,

  backgroundColor: `hsl(${vars.hsl.onSurface} / 0.1)`,
  borderRadius: vars.radius.base,
  backdropFilter: 'blur(10px)',

  transform: 'translateY(-100%)',
});

globalStyle(`${mediaPlayerControls} svg`, {
  fill: 'currentColor',
});

export const mediaPlayerControlsButtons = style({
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  gap: vars.spacing.base,
  alignItems: 'center',
});

export const mediaPlayerControlsStart = style({
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: 'auto',

  color: vars.color.onSurface,
});

export const mediaPlayerControlsCenter = style({
  color: vars.color.onSurface,
});

export const mediaPlayerControlsEnd = style({
  justifySelf: 'end',

  color: vars.color.onSurface,
});

export const mediaPlayerTimeline = style({
  width: '100%',
  marginTop: vars.spacing.base,

  vars: {
    [rangeTrackHeight]: '5px',
    [rangeThumbHeight]: '12px',
    [rangeThumbBackground]: vars.color.surface,
    [rangeThumbShadow]: vars.elevation[1],
    [progressHeight]: '3px',
    [progressBackground]: 'rgba(255, 255, 255, .15)',
  },
});

export const mediaPlayerProgress = style({
  height: 10,
  marginBottom: 5,
  position: 'relative',
});

const rangeTrack: CSSProperties = {
  height: rangeTrackHeight,

  background: 'transparent',
  border: 'none',
  borderRadius: calc.divide(rangeTrackHeight, 2),

  transition: transition(['box-shadow']),
  userSelect: 'none',
};

const rangeThumbProperties: CSSProperties = {
  height: rangeThumbHeight,
  width: rangeThumbHeight,

  position: 'relative',

  background: rangeThumbBackground,
  border: 'none',
  borderRadius: '100%',
  boxShadow: rangeThumbShadow,

  transition: transition(['all']),
};

const rangeProgressProperties: CSSProperties = {
  height: rangeTrackHeight,

  background: 'currentColor',
  borderRadius: calc.divide(rangeTrackHeight, 2),
};

export const mediaPlayerProgressRange = style({
  display: 'block',
  width: '100%',
  height: '10px',
  zIndex: '1',

  position: 'relative',
  top: '50%',
  left: 0,

  appearance: 'none',
  color: vars.color.surface,
  background: 'transparent',
  border: '0',
  borderRadius: calc.multiply(rangeThumbHeight, 2),

  transform: 'translateY(-50%)',

  selectors: {
    '&::-moz-range-track': rangeTrack,
    '&::-moz-range-thumb': rangeThumbProperties,
    '&::-moz-range-progress': rangeProgressProperties,
    '&::-webkit-slider-runnable-track': {
      ...rangeTrack,
      backgroundImage: `linear-gradient(to right, currentColor ${rangeValueVar}, transparent ${rangeValueVar})`,
    },
    '&::-webkit-slider-thumb': {
      ...rangeThumbProperties,
      appearance: 'none',
      marginTop: `calc(((${rangeThumbHeight} - ${rangeTrackHeight}) / 2) * -1)`,
    },
  },
});

export const mediaPlayerProgressBuffer = style({
  width: '100%',
  height: progressHeight,
  zIndex: '0',

  position: 'absolute',
  top: '50%',
  left: '0',

  appearance: 'none',
  background: progressBackground,
  border: 'none',
  borderRadius: calc.multiply(progressHeight, 2),
  verticalAlign: 'baseline',

  transform: 'translateY(-50%)',
  transition: transition(['height']),

  selectors: {
    '&::-webkit-progress-bar': {
      background: 'transparent',
    },

    '&::-webkit-progress-value': {
      background: 'currentColor',
      borderRadius: '100px',
      minWidth: rangeTrackHeight,

      transition: transition(['width']),
    },

    '&::-moz-progress-bar': {
      background: 'currentColor',
      borderRadius: '100px',
      minWidth: rangeTrackHeight,

      transition: transition(['width']),
    },
  },
});
