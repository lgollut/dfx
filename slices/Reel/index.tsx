'use client';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { SliceComponentProps } from '@prismicio/react';
import { useState } from 'react';

import { Image } from '@/components/image';
import { reelContainer, reelItem, reelWrapper } from '@/slices/Reel/reel.css';

import type { Content } from '@prismicio/client';

/**
 * Props for `Reel`.
 */
export type ReelProps = SliceComponentProps<Content.ReelSlice>;

/**
 * Component for "Reel" Slices.
 */
const Reel = ({ slice }: ReelProps): JSX.Element => {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  return (
    <section
      ref={setContainer}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={reelContainer}
    >
      <div className={reelWrapper}>
        {slice.items.map((item, index) => {
          return (
            <Image key={index} field={item.image['2/3']} className={reelItem} />
          );
        })}
      </div>
    </section>
  );
};

export default Reel;
