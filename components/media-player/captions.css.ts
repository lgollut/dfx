import { globalStyle, style } from '@vanilla-extract/css';

import { player } from '@/components/media-player/media-player.css';

export const captions = style({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  contain: 'layout style',
  margin: 'var(--overlay-padding)',
  fontSize: 'var(--cue-font-size)',
  pointerEvents: 'none',
  userSelect: 'none',
  wordSpacing: 'normal',
  wordBreak: 'break-word',
  bottom: 8,
  transition: 'bottom 0.15s linear',

  vars: {
    '--cue-color': 'var(--media-cue-color, white)',
    '--cue-bg-color': 'var(--media-cue-bg, rgba(0, 0, 0, 0.7))',
    '--cue-font-size': 'calc(var(--overlay-height) / 100 * 4.5)',
    '--cue-line-height': 'calc(var(--cue-font-size) * 1.2)',
    '--cue-padding-x': 'calc(var(--cue-font-size) * 0.6)',
    '--cue-padding-y': 'calc(var(--cue-font-size) * 0.4)',
  },

  selectors: {
    '&[aria-hidden="true"]': {
      display: 'none',
    },
  },
});

globalStyle(`${captions}[data-dir="rtl"] [data-part="cue-display"]`, {
  direction: 'rtl',
});

globalStyle(`${captions} [data-part="cue-display"]`, {
  position: 'absolute',
  direction: 'ltr',
  overflow: 'visible',
  contain: 'content',
  top: 'var(--cue-top)',
  left: 'var(--cue-left)',
  right: 'var(--cue-right)',
  bottom: 'var(--cue-bottom)',
  width: 'var(--cue-width, auto)',
  height: 'var(--cue-height, auto)',
  transform: 'var(--cue-transform)',
  textAlign: 'var(--cue-text-align)',
  writingMode: 'var(--cue-writing-mode, unset)',
  whiteSpace: 'pre-line',
  unicodeBidi: 'plaintext',
  minWidth: 'min-content',
  minHeight: 'min-content',
});

globalStyle(`${captions} [data-part="cue"]`, {
  display: 'inline-block',
  contain: 'content',
  borderRadius: 2,
  backdropFilter: 'blur(8px)',
  padding: 'var(--cue-padding-y) var(--cue-padding-x)',
  lineHeight: 'var(--cue-line-height)',
  backgroundColor: 'var(--cue-bg-color)',
  color: 'var(--cue-color)',
  whiteSpace: 'pre-wrap',
  outline: 'var(--cue-outline)',
  textShadow: 'var(--cue-text-shadow)',
});

globalStyle(
  `${captions} [data-part="cue-display"][data-vertical] [data-part="cue"]`,
  {
    padding: 'var(--cue-padding-x) var(--cue-padding-y)',
  },
);

globalStyle(`${player}[data-preview] ${captions}`, {
  opacity: 0,
  visibility: 'hidden',
});

globalStyle(`${player}[data-controls] ${captions}`, {
  bottom: 78,
});
