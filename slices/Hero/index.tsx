import { isFilled, type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

import { Frame } from '@/components/frame/frame';
import { Heading } from '@/components/heading';
import { Hidden } from '@/components/hidden';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { hero, rootTitle, title } from '@/slices/Hero/hero.css';

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const subtitle = isFilled.keyText(slice.primary.subtitle)
    ? slice.primary.subtitle
    : '';
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={hero}
    >
      <Hidden useCss at="xlUp">
        <Frame
          use={Image}
          field={slice.primary.image['9/16']}
          tint={slice.primary.tint}
          priority
        />
      </Hidden>
      <Hidden useCss at="lgDown">
        <Frame
          use={Image}
          field={slice.primary.image['16/9']}
          tint={slice.primary.tint}
          priority
        />
      </Hidden>
      <Stack space="none" className={rootTitle}>
        <Heading variant="displayLarge" className={title}>
          {slice.primary.title}
        </Heading>
        <Heading variant="headlineLarge">{slice.primary.subtitle}</Heading>
      </Stack>
    </section>
  );
};

export default Hero;
