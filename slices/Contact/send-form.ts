'use server';

import { Resend } from 'resend';

import { Message } from '@/slices/Contact/Message';

type SendFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendForm({
  name,
  email,
  subject,
  message,
}: SendFormData) {
  const resend = new Resend(process.env.RESEND_KEY);

  return await resend.emails.send({
    from: 'info@dfx.band',
    to: 'info@dfx.band',
    subject,
    react: Message({ name, email, subject, message }),
  });
}
