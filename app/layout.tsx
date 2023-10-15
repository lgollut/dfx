import '@/styles/globals.css';
import '@/styles/layers.css';

import { PrismicPreview } from '@prismicio/next';
import { clsx } from 'clsx';

import { repositoryName } from '@/prismicio';
import { fontClass } from '@/styles/font';

import { html, body } from './layout.css';

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
