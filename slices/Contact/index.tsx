'use client';

import { SliceComponentProps } from '@prismicio/react';
import { Check } from 'lucide-react';
import { useCallback, useState, useTransition } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Box } from '@/components/box';
import { Button } from '@/components/button';
import { Cluster } from '@/components/cluster';
import { Heading } from '@/components/heading';
import { Image } from '@/components/image';
import { Input } from '@/components/input/input';
import { Stack } from '@/components/stack';
import { Text } from '@/components/text';
import { Textarea } from '@/components/textarea/textarea';

import { contact, contactForm } from './contact.css';
import { sendForm } from './send-form';

import type { Content } from '@prismicio/client';

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

export type MessageInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  const { register, handleSubmit, reset } = useForm<MessageInputs>();
  const [sent, setSent] = useState(false);

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<MessageInputs> = useCallback(
    (formData) => {
      startTransition(async () => {
        const { data, error } = await sendForm(formData);

        if (error || !data) {
          throw new Error(error?.message || 'An unexpected error occurred');
        }

        setSent(true);
        reset();
      });
    },
    [setSent, reset, startTransition],
  );

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={contact}
    >
      <Image field={slice.primary.image} tint={slice.primary.tint} cover />
      <Box space={['5xl', 'base']} className={contactForm}>
        <Stack space="2xl">
          <Heading>{slice.primary.title}</Heading>
          <Stack space="lg">
            <Stack use="label" space="xs">
              <Text>{'Votre nom'}</Text>
              <Input {...register('name', { required: true })} />
            </Stack>
            <Stack use="label" space="xs">
              <Text>{'Votre email'}</Text>
              <Input type="email" {...register('email', { required: true })} />
            </Stack>
            <Stack use="label" space="xs">
              <Text>{'Sujet du message'}</Text>
              <Input {...register('subject', { required: true })} />
            </Stack>
            <Stack use="label" space="xs">
              <Text>{'Message'}</Text>
              <Textarea {...register('message', { required: true })} />
            </Stack>

            <Cluster space="lg">
              <Button type="submit" disabled={isPending}>
                {'Envoyer'}
              </Button>
              {sent && (
                <Cluster space="sm">
                  <Check size={24} />
                  <Text>{'Message envoyé'}</Text>
                </Cluster>
              )}
            </Cluster>
          </Stack>
        </Stack>
      </Box>
    </section>
  );
};

export default Contact;
