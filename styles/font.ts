import { clsx } from 'clsx';
import { Montserrat } from 'next/font/google';

const fontFamilyBody = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '800'],
  display: 'swap',
  variable: '--font-plain',
});

export const fontClass = clsx(fontFamilyBody.variable);
