import { PrismicNextImage } from '@prismicio/next';
import { clsx } from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { image } from './image.css';
import { ImageProps } from './image.types';

const Image = (
  { className, field, cover, tint, ...rest }: ImageProps,
  ref: ForwardedRef<any>,
) => {
  return (
    <div ref={ref} className={clsx(image({ cover, tint }), className)}>
      <PrismicNextImage field={field} {...rest} />
    </div>
  );
};

const WrappedImage = forwardRef(Image);

export { WrappedImage as Image };
