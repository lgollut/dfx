import { globalStyle, style } from '@vanilla-extract/css';

export const slider = style({
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  height: 40,
  position: 'relative',
  contain: 'layout style',
  outline: 'none',
  pointerEvents: 'auto',
  cursor: 'pointer',
  userSelect: 'none',
  touchAction: 'none',
  /** Prevent thumb flowing out of slider (15px = thumb width). */
  margin: '0 calc(15px / 2)',
  WebkitUserSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
});

export const sliderSmall = style({
  maxWidth: 72,
});

export const track = style({
  zIndex: 0,
  position: 'absolute',
  width: '100%',
  height: 5,
  top: '50%',
  left: 0,
  borderRadius: '1px',
  transform: 'translateY(-50%) translateZ(0)',
  backgroundColor: 'rgb(255 255 255 / 0.3)',
  contain: 'strict',
});

globalStyle(`${slider}[data-focus] ${track}`, {
  boxShadow: 'var(--media-focus-ring)',
});

export const trackFill = style({
  zIndex: 2,
  backgroundColor: 'var(--media-brand)',
  width: 'var(--slider-fill, 0%)',
  willChange: 'width',
});

globalStyle(`.time-slider ${trackFill}`, {
  width: 'var(--chapter-fill, 0%)',
});

export const progress = style({
  width: 'var(--chapter-progress, 0%)',
  willChange: 'width',
  backgroundColor: 'rgb(255 255 255 / 0.5)',
});

/*************************************************************************************************
 * Slider Chapters
 *************************************************************************************************/

export const chapters = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  contain: 'layout style',
  borderRadius: '1px',
});

export const chapter = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  willChange: 'height, transform',
  contain: 'layout style',
  borderRadius: '1px',
  marginRight: 2,

  ':last-child': {
    marginRight: 0,
  },
});

/*************************************************************************************************
 * Slider Preview
 *************************************************************************************************/

export const preview = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0,
  borderRadius: 2,
  pointerEvents: 'none',
  transition: 'opacity 0.2s ease-out',
  willChange: 'left, opacity',
  contain: 'layout paint style',

  selectors: {
    '&[data-visible]': {
      opacity: 1,
      transition: 'opacity 0.2s ease-in',
    },
  },
});

export const chapterTitle = style({
  marginTop: 8,
  fontSize: 14,
});

export const timeValue = style({
  fontSize: 13,
  marginTop: 2,
});

export const volumeValue = style({
  fontSize: 13,
  padding: '1px 10px',
  borderRadius: 2,
  backgroundColor: 'black',
});

export const thumbnail = style({
  display: 'block',
  width: 'var(--thumbnail-width)',
  height: 'var(--thumbnail-height)',
  backgroundColor: 'black',
  border: '1px solid white',
  contain: 'strict',
  overflow: 'hidden',
  minWidth: 120,
  minHeight: 80,
  maxWidth: 180,
  maxHeight: 160,
});

/*************************************************************************************************
 * Slider Thumb
 *************************************************************************************************/

export const thumb = style({
  position: 'absolute',
  top: '50%',
  left: 'var(--slider-fill)',
  opacity: 0,
  contain: 'layout size style',
  width: 15,
  height: 15,
  border: '1px solid #cacaca',
  borderRadius: '9999px',
  backgroundColor: '#fff',
  transform: 'translate(-50%, -50%) translateZ(0)',
  transition: 'opacity 0.15s ease-in',
  pointerEvents: 'none',
  willChange: 'left',
  zIndex: 2 /** above track fill. */,

  selectors: {
    '[data-active] > &': {
      opacity: 1,
      transition: 'opacity 0.2s ease-in',
    },

    '[data-dragging] > &': {
      boxShadow: '0 0 0 3px hsla(0, 0%, 100%, 0.4)',
    },
  },
});
