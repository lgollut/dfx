import { clsx } from 'clsx';
import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';

import { textarea } from '@/components/textarea/textarea.css';

const Textarea = (
  { className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: ForwardedRef<any>,
) => {
  return (
    <textarea ref={ref} className={clsx(textarea, className)} {...props} />
  );
};

const WrappedTextarea = forwardRef(Textarea);

export { WrappedTextarea as Textarea };
