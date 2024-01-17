import '@/styles/globals.css';
import '@/styles/layers.css';

import { PrismicPreview } from '@prismicio/next';
import { clsx } from 'clsx';
import { Metadata } from 'next';

import { repositoryName } from '@/prismicio';
import { fontClass } from '@/styles/font';

import { html, body } from './layout.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dfx.band'),
  title: 'DFX music',
  description: 'Funk music band from Switzerland',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(fontClass, html)}>
      <body className={body}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
