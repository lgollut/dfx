import { SliceComponentProps } from '@prismicio/react';

import type { Content } from '@prismicio/client';

/**
 * Props for `Media`.
 */
export type MediaProps = SliceComponentProps<Content.MediaSlice>;

/**
 * Component for "Media" Slices.
 */
const Media = ({ slice }: MediaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for media (variation: {slice.variation}) Slices
    </section>
  );
};

export default Media;
