/**
 * Minimal reset based on Josh's Custom CSS Reset
 * https://www.joshwcomeau.com/css/custom-css-reset/
 */

import { globalStyle } from '@vanilla-extract/css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('*', {
  margin: 0,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

globalStyle('input, button, textarea, select', {
  font: 'inherit',
});

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
});

globalStyle('button', {
  border: 'none',

  cursor: 'pointer',
});

globalStyle('a', {
  textDecoration: 'none',
});

globalStyle('fieldset', {
  padding: 0,
  border: 'none',
});

globalStyle('pre', {
  whiteSpace: 'pre-wrap',
});
