import { clsx } from 'clsx';
import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';

import { inputAppearance } from '@/components/input/input-appearance.css';

const Input = (
  { className, ...props }: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<any>,
) => {
  return (
    <input
      ref={ref}
      className={clsx(inputAppearance(), className)}
      {...props}
    />
  );
};

const WrappedInput = forwardRef(Input);

export { WrappedInput as Input };
