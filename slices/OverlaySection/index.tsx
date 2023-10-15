import { SliceComponentProps } from '@prismicio/react';

import { Frame } from '@/components/frame/frame';
import { Heading } from '@/components/heading';
import { Hidden } from '@/components/hidden';
import { Image } from '@/components/image';
import { RichText } from '@/components/rich-text/rich-text';
import {
  overlay,
  overlayBackground,
  overlaySection,
  overlayWrapper,
} from '@/slices/OverlaySection/overlay-section.css';

import type { Content } from '@prismicio/client';

/**
 * Props for `OverlaySection`.
 */
export type OverlaySectionProps =
  SliceComponentProps<Content.OverlaySectionSlice>;

/**
 * Component for "OverlaySection" Slices.
 */
const OverlaySection = ({ slice }: OverlaySectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={overlaySection}
    >
      <Frame
        use={Image}
        field={slice.primary.image['24/9']}
        tint={slice.primary.tint}
      />
      <div className={overlayWrapper}>
        <Hidden useCss at="lgUp">
          <Frame
            use={Image}
            field={slice.primary.image['3/2']}
            tint={slice.primary.tint}
            className={overlayBackground}
            cover
          />
        </Hidden>
        <div className={overlay}>
          <Heading transform="uppercase" align="start">
            {slice.primary.title}
          </Heading>
          <RichText field={slice.primary.content} />
        </div>
      </div>
    </section>
  );
};

export default OverlaySection;
