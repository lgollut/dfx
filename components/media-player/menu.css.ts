/*************************************************************************************************
 * Menu
 *************************************************************************************************/

import { createVar, globalStyle, keyframes, style } from '@vanilla-extract/css';

const enterTransform = createVar();
const exitTransform = createVar();

const mediaMenuEnter = keyframes({
  from: {
    opacity: 0,
    transform: exitTransform,
  },
  to: {
    opacity: 1,
    transform: enterTransform,
  },
});

const mediaMenuExit = keyframes({
  from: {
    opacity: 1,
    transform: enterTransform,
  },
  to: {
    opacity: 0,
    transform: exitTransform,
  },
});

export const menu = style({
  display: 'flex',
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'sans-serif',
  flexDirection: 'column',
  transition: 'height 0.35s ease',
  minWidth: 260,
  padding: 10,
  borderRadius: 8,
  border: '1px solid rgb(255 255 255 / 0.1)',
  backgroundColor: 'rgb(10 10 10 / 0.95)',
  backdropFilter: 'blur(4px)',
  height: 'var(--menu-height, auto)',
  willChange: 'width, height',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  opacity: 0,
  maxHeight: 250,

  vars: {
    [enterTransform]: 'translateY(0px)',
    [exitTransform]: 'translateY(12px)',
  },

  selectors: {
    '&[data-resizing]': {
      overflow: 'hidden',
      pointerEvents: 'none',
    },

    '&:not([data-open])': {
      animationName: mediaMenuExit,
      animationDuration: '0.2s',
      animationTimingFunction: 'ease-out',
    },

    '&[data-open]': {
      animationName: mediaMenuEnter,
      animationDuration: '0.3s',
      animationTimingFunction: 'ease-out',
      animationFillMode: 'forwards',
    },

    "&[data-placement~='bottom']": {
      vars: {
        [enterTransform]: 'translateY(0px)',
        [exitTransform]: 'translateY(-12px)',
      },
    },
  },
});

globalStyle(
  `${menu} [role="menuitem"][data-focus], ${menu} [role="menuitemradio"][data-focus]`,
  {
    outline: 'none',
    boxShadow: 'var(--media-focus-ring)',
  },
);

/*************************************************************************************************
 * Menu Button
 *************************************************************************************************/

export const rotateIcon = style({
  transition: 'transform 0.2s ease-out',
});

export const menuButton = style({});

globalStyle(`${menuButton}[aria-expanded='true'] ${rotateIcon}`, {
  transform: 'rotate(90deg)',
  transition: 'transform 0.2s ease-in',
});

/*************************************************************************************************
 * Submenu Button
 *************************************************************************************************/

export const submenuButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: 10,
  borderRadius: 2,
  color: 'white',
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
        cursor: 'pointer',
        backgroundColor: 'rgb(245 245 245 / 0.08)',
      },
    },
  },

  selectors: {
    '&[data-open]': {
      position: 'sticky',
      top: '-10px',
      left: 0,
      width: '100%',
      zIndex: 10,
      backdropFilter: 'blur(4px)',
      borderRadius: 0,
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      borderBottom: '1px solid rgb(245 245 245 /0.15)',
      backgroundColor: 'rgb(10 10 10 / 0.6)',
    },

    '&[data-focus]': {
      backgroundColor: 'rgb(245 245 245 / 0.08)',
    },

    "&[aria-disabled='true'], &[aria-hidden='true']": {
      display: 'none',
    },
  },
});

export const submenuIcon = style({
  width: 22,
  height: 22,
});

const submenuIcons = style({
  width: 18,
  height: 18,
  display: 'none',
});

export const submenuOpenIcon = style([
  submenuIcons,
  {
    display: 'inline-block',
    marginRight: 2,
    marginLeft: 'auto',
    color: 'rgb(245 245 245 / 0.5)',
    fontSize: 14,
  },
]);

export const submenuCloseIcon = style([
  submenuIcons,
  {
    marginRight: 2,
  },
]);

globalStyle(`${submenuButton}[data-open] ${submenuCloseIcon}`, {
  display: 'inline-block',
});

globalStyle(`${submenuButton}[data-open] ${submenuIcon}`, {
  display: 'none',
});

export const submenuLabel = style({});

globalStyle(`${submenuButton}:not([data-open]) ${submenuLabel}`, {
  marginLeft: 6,
});

export const submenuHint = style({
  marginLeft: 'auto',
  color: 'rgb(245 245 245 / 0.5)',
  fontSize: 14,

  selectors: {
    '&:not(:empty)': {
      display: 'none',
    },
  },
});

globalStyle(`${submenuHint}:not(:empty) + ${submenuOpenIcon}`, {
  marginLeft: 2,
});

globalStyle(`${submenuButton}:not([data-open]) ${submenuOpenIcon}`, {
  display: 'inline-block',
});

/*************************************************************************************************
 * Submenu
 *************************************************************************************************/

export const submenu = style({
  display: 'inline-block',
  alignItems: 'flex-start',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  marginTop: 12,

  selectors: {
    '&[aria-hidden="true"]': {
      display: 'none',
    },
  },
});

/*************************************************************************************************
 * Radio Group
 *************************************************************************************************/

export const radioGroup = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const radio = style({
  alignItems: 'center',
  appearance: 'none',
  fontSize: 14,
  borderRadius: 2,
  contain: 'content',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'flex-start',
  padding: 12,
  position: 'relative',
  width: '100%',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',

  '@media': {
    '(hover: hover) and (pointer: fine)': {
      ':hover': {
        cursor: 'pointer',
        backgroundColor: 'rgb(245 245 245 / 0.08)',
      },
    },
  },

  selectors: {
    '&[data-focus]': {
      backgroundColor: 'rgb(245 245 245 / 0.08)',
    },
  },
});

export const radioCheck = style({
  alignItems: 'center',
  borderRadius: '9999px',
  display: 'flex',
  width: 9,
  height: 9,
  border: '2px solid rgb(245 245 245 / 0.5)',
  justifyContent: 'center',
  marginRight: 8,
});

globalStyle(`${radio}[data-checked] ${radioCheck}`, {
  border: '2px solid var(--media-brand)',
});

globalStyle(`${radio}[data-checked] ${radioCheck}::after`, {
  content: "''",
  borderColor: 'var(--media-brand)',
  backgroundColor: 'var(--media-brand)',
  borderRadius: '9999px',
  height: 4,
  width: 4,
});
