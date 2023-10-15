'use client';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { isFilled } from '@prismicio/client';
import PerfectScrollbar from 'perfect-scrollbar';
import { useEffect, useMemo, useState } from 'react';

import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { RevealedContentProps } from '@/slices/RevealedContent';
import { Concert } from '@/slices/RevealedContent/concert';
import {
  container,
  content,
  image,
} from '@/slices/RevealedContent/revealed-content.css';

export const ConcertsSlice = ({ slice, context }: RevealedContentProps) => {
  const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);

  const pastConcerts = useMemo(
    () =>
      context.concerts
        .filter((concert) => {
          if (!isFilled.date(concert.data.date)) {
            return false;
          }

          const concertDate = new Date(concert.data.date);
          const currentDate = new Date();

          return concertDate < currentDate;
        })
        .sort((a, b) => {
          const aDate = new Date(a.data.date!);
          const bDate = new Date(b.data.date!);

          return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
        }),
    [context.concerts],
  );

  const futureConcerts = useMemo(
    () =>
      context.concerts
        .filter((concert) => {
          if (!isFilled.date(concert.data.date)) {
            return false;
          }

          const concertDate = new Date(concert.data.date);
          const currentDate = new Date();

          return concertDate >= currentDate;
        })
        .sort((a, b) => {
          const aDate = new Date(a.data.date!);
          const bDate = new Date(b.data.date!);

          return aDate > bDate ? 1 : aDate < bDate ? -1 : 0;
        }),
    [context.concerts],
  );

  useEffect(() => {
    if (!containerEl) {
      return;
    }

    const ps = new PerfectScrollbar(containerEl);

    return () => {
      ps.destroy();
    };
  }, [containerEl]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={container}
    >
      <Image
        field={slice.primary.image}
        tint={slice.primary.tint}
        className={image}
      />
      <div ref={setContainerEl} className={content}>
        <Stack space="2xl">
          <Heading variant="headlineLarge">{slice.primary.title}</Heading>
          {futureConcerts.length > 0 && (
            <Stack space="lg">
              <Heading variant="headlineMedium">{'Prochainement'}</Heading>
              <Stack>
                {futureConcerts.map((concert) => (
                  <Concert key={concert.uid} concert={concert} />
                ))}
              </Stack>
            </Stack>
          )}
          <Stack space="lg">
            <Heading variant="headlineMedium">{'Dernièrement'}</Heading>
            <Stack>
              {pastConcerts.map((concert) => (
                <Text
                  key={concert.uid}
                >{`${concert.data.venue} - ${concert.data.location}`}</Text>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </div>
    </section>
  );
};
