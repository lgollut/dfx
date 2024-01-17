import { style, createVar, globalStyle } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';
import { transition } from '@/styles/transition';
import { typography } from '@/styles/typography.css';

const inputTextColor = createVar();
const outlineColor = createVar();

const inputAppearanceBase = style([
  typography.bodyLarge,
  {
    boxSizing: 'border-box',
    minHeight: 50,

    color: inputTextColor,

    backgroundColor: vars.color.onSurface,

    transition: transition(['border-color', 'box-shadow'], {
      duration: 'shorter',
    }),

    selectors: {
      '&:disabled, &:has(:disabled)': {
        cursor: 'unset',

        backgroundColor: `hsl(${vars.hsl.onSurface} / 0.03)`,

        vars: {
          [inputTextColor]: `hsl(${vars.hsl.onSurface} / 0.38)`,
        },
      },
    },

    vars: {
      [inputTextColor]: vars.color.surface,
    },
  },
]);

export const inputAppearance = recipe({
  base: inputAppearanceBase,

  variants: {
    outlined: {
      true: {
        paddingInline: vars.spacing.base,
        paddingBlock: vars.spacing.sm,

        borderRadius: vars.radius.sm,
        borderColor: outlineColor,
        borderStyle: 'solid',
        borderWidth: 1,

        selectors: {
          '&:focus, &:focus-within, &:focus-visible': {
            boxShadow: `0 0 0 1px ${outlineColor} inset`,
            outline: 'none',

            vars: {
              [outlineColor]: vars.color.primary,
            },
          },

          '&:disabled, &:has(:disabled)': {
            vars: {
              [outlineColor]: `hsl(${vars.hsl.onSurface} / 0.38)`,
            },
          },

          '&[aria-invalid], &:has([aria-invalid])': {
            vars: {
              [outlineColor]: vars.color.primary,
            },
          },
        },

        vars: {
          [outlineColor]: vars.color.outlineVariant,
        },
      },

      false: {},
    },
  },

  defaultVariants: {
    outlined: true,
  },
});

globalStyle(`${inputAppearanceBase} input:is(:focus, :focus-visible)`, {
  outline: 'none',
});
