'use client';

import 'perfect-scrollbar/css/perfect-scrollbar.css';

import { isFilled } from '@prismicio/client';
import { useMediaQuery } from '@uidotdev/usehooks';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';

import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { ConcertDocument } from '@/prismicio-types';
import { RevealedContentProps } from '@/slices/RevealedContent';
import { Concert } from '@/slices/RevealedContent/concert';
import {
  container,
  content,
  image,
  innerContent,
  revealContainer,
  stack,
} from '@/slices/RevealedContent/revealed-content.css';

export const ConcertsSlice = ({ slice, context }: RevealedContentProps) => {
  const [revealed, setRevealed] = useState(false);
  const isAnimated = useMediaQuery('screen and (min-width : 1024px)');

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

  const featuredConcert = useMemo(
    () => pastConcerts.filter((concert) => concert.data.featured),
    [pastConcerts],
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

  const handleReveal = useCallback(() => {
    setRevealed((value) => !value);
  }, [setRevealed]);

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
      <motion.div
        initial={false}
        layout
        className={content}
        animate={revealed ? 'revealed' : 'hidden'}
        transition={{
          type: 'spring',
          stiffness: 300,
          velocity: 10,
          damping: 25,
        }}
        variants={{
          revealed: {
            width: '100%',
          },
          hidden: {
            width: isAnimated ? '33%' : '100%',
          },
        }}
      >
        <Stack space="2xl" className={innerContent}>
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
          <Stack space="lg" style={{ flex: '1 1 100%', height: '1px' }}>
            <AnimatePresence mode="popLayout">
              {revealed ? (
                <motion.div
                  key="past"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Heading variant="headlineMedium">
                    {'Tous les concerts passés'}
                  </Heading>
                </motion.div>
              ) : (
                <motion.div
                  key="featured"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <Heading variant="headlineMedium">
                    {'Sélection de concerts'}
                  </Heading>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={revealContainer}>
              <AnimatePresence mode="wait">
                {revealed ? (
                  <ConcertList key={'past'} concerts={pastConcerts} />
                ) : (
                  <ConcertList key={'featured'} concerts={featuredConcert} />
                )}
              </AnimatePresence>
            </div>
            <div>
              <Button onClick={handleReveal}>
                {revealed ? 'Voir la sélection' : 'Tout voir'}
              </Button>
            </div>
          </Stack>
        </Stack>
      </motion.div>
    </section>
  );
};

const ConcertList = ({ concerts }: { concerts: ConcertDocument[] }) => {
  return (
    <motion.div
      inherit={false}
      className={stack}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
    >
      {concerts.map((concert) => (
        <motion.div
          inherit={false}
          key={`${concert.uid}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Text>{`${concert.data.venue} - ${concert.data.location}`}</Text>
        </motion.div>
      ))}
    </motion.div>
  );
};
