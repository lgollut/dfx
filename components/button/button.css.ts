import { style, createVar } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';

import { vars } from '@/styles/contract.css';

const containerColor = createVar();
const stateLayerColor = createVar();
const labelColor = createVar();

const size = createVar();
const inlineSpace = createVar();
const spacing = createVar();

export const baseButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: spacing,

  height: size,
  paddingInline: inlineSpace,

  position: 'relative',

  color: labelColor,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',

  backgroundColor: containerColor,
  borderRadius: vars.radius.sm,

  cursor: 'pointer',

  ':disabled': {
    cursor: 'unset',
    pointerEvents: 'none',
  },

  '::before': {
    content: '""',

    width: '100%',
    height: '100%',

    position: 'absolute',
    top: 0,
    left: 0,

    backgroundColor: stateLayerColor,
    opacity: 0,
    borderRadius: 'inherit',

    transition: `opacity ${vars.duration.shorter} ${vars.easing.inOut}`,
    pointerEvents: 'none',
  },

  selectors: {
    '&:focus, &:focus-visible': {
      outline: 'none',
    },

    '&:hover::before': {
      opacity: vars.state.hovered.opacity,
    },

    '&:focus::before, &:focus-visible::before': {
      opacity: vars.state.focused.opacity,
    },

    '&:active::before': {
      opacity: vars.state.pressed.opacity,
    },
  },
});

export const button = recipe({
  base: baseButton,

  variants: {
    /**
     * The visual variants of the Button
     */
    variant: {
      bare: {},

      filled: {
        borderStyle: 'none',

        ':hover': {
          boxShadow: vars.elevation[1],
        },

        ':disabled': {
          vars: {
            [labelColor]: `hsl(${vars.hsl.onSurface} / 0.38)`,
            [containerColor]: `hsl(${vars.hsl.onSurface} / 0.12)`,
          },
        },

        vars: {
          [labelColor]: vars.color.surface,
          [containerColor]: vars.color.onSurface,
          [stateLayerColor]: vars.color.surface,
        },
      },

      outlined: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: vars.color.outlineVariant,

        ':focus, :focus-visible': {
          borderColor: vars.color.onSurface,
        },

        ':disabled': {
          borderColor: `hsl(${vars.hsl.onSurface} / 0.12)`,

          vars: {
            [labelColor]: `hsl(${vars.hsl.onSurface} / 0.38)`,
          },
        },

        vars: {
          [labelColor]: vars.color.onSurface,
          [containerColor]: 'transparent',
          [stateLayerColor]: vars.color.onSurface,
        },
      },

      ghost: {
        ':focus, :focus-visible': {
          borderColor: vars.color.onSurface,
        },

        ':disabled': {
          borderColor: `hsl(${vars.hsl.onSurface} / 0.12)`,

          vars: {
            [labelColor]: `hsl(${vars.hsl.onSurface} / 0.38)`,
          },
        },

        selectors: {
          '&[aria-current="page"]::before': {
            opacity: vars.state.hovered.opacity,

            vars: {
              [stateLayerColor]: vars.color.onSurface,
            },
          },
        },

        vars: {
          [labelColor]: vars.color.onSurface,
          [containerColor]: 'transparent',
          [stateLayerColor]: vars.color.onSurface,
        },
      },
    },

    size: {
      sm: {
        vars: {
          [size]: vars.spacing.lg,
          [inlineSpace]: vars.spacing.base,
          [spacing]: vars.spacing.sm,
        },
      },
      base: {
        vars: {
          [size]: vars.spacing.xl,
          [inlineSpace]: vars.spacing.md,
          [spacing]: vars.spacing.base,
        },
      },
      lg: {
        vars: {
          [size]: vars.spacing['2xl'],
          [inlineSpace]: vars.spacing.xl,
          [spacing]: vars.spacing.lg,
        },
      },
      xl: {
        vars: {
          [size]: vars.spacing['4xl'],
          [inlineSpace]: vars.spacing['2xl'],
          [spacing]: vars.spacing.xl,
        },
      },
    },

    flow: {
      reverse: {
        flexDirection: 'row-reverse',
      },
    },

    iconOnly: {
      true: {
        paddingInline: 'unset',
        width: size,
      },
    },
  },
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
