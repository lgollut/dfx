import { PrismicNextLink } from '@prismicio/next';
import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { typography } from '@/styles/typography.css';

import { button } from './button.css';
import { ButtonProps } from './button.types';

const buttonSizes = ['sm', 'base', 'lg', 'xl'];
const iconSizes = [14, 18, 24, 32];

const Button = <TUse extends ElementType, TRoute extends string>(
  props: ButtonProps<TUse, TRoute>,
  ref: ForwardedRef<any>,
) => {
  const {
    variant = 'filled',
    children,
    icon: IconComp,
    iconOnly = false,
    size = 'base',
    className,
    flow,
    ...rest
  } = props;

  let Comp;

  if (props.href) {
    Comp = PrismicNextLink;
  } else {
    Comp = props.use ?? 'button';
  }

  const typographySize = size === 'sm' ? 'labelSmall' : 'labelLarge';
  const iconSize = iconSizes[buttonSizes.indexOf(size)];

  return (
    <Comp
      ref={ref}
      className={clsx(
        button({ variant, size, flow, iconOnly }),
        typography[typographySize],
        className,
      )}
      aria-label={iconOnly ? children : undefined}
      {...rest}
    >
      {IconComp && <IconComp size={iconSize} />}
      {!iconOnly && children}
    </Comp>
  );
};

/**
 * The main user action element.
 */
const WrappedButton = forwardRef(Button);

export { WrappedButton as Button };
