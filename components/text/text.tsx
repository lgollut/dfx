import { clsx } from 'clsx';
import { ElementType, ForwardedRef, forwardRef } from 'react';

import { text } from './text.css';
import { TextProps } from './text.types';

const Text = <TUse extends ElementType>(
  props: TextProps<TUse>,
  ref: ForwardedRef<any>,
) => {
  const {
    use: Comp = 'span',
    variant = 'bodyLarge',
    color,
    align,
    className,
    ...rest
  } = props;
  return (
    <Comp
      ref={ref}
      className={clsx(text({ variant, color, align }), className)}
      {...rest}
    />
  );
};

export const WrappedText = forwardRef(Text);

export { WrappedText as Text };
