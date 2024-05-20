'use client';

import { useEffect, useState } from 'react';

import { Text } from '@/components/text';
import { ConcertDocument } from '@/prismicio-types';

type ConcertProps = { concert: ConcertDocument };

export const Concert = ({ concert }: ConcertProps) => {
  const [formattedDate, setDate] = useState<string>(concert.data.date!);

  useEffect(() => {
    const date = new Intl.DateTimeFormat(navigator.language, {
      dateStyle: 'medium',
    }).format(Date.parse(concert.data.date!));

    setDate(date);
  }, [concert.data.date, setDate]);

  return (
    <Text
      key={concert.uid}
    >{`${formattedDate} | ${concert.data.venue} - ${concert.data.location}`}</Text>
  );
};
