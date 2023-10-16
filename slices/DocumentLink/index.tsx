import { isFilled, type Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { ReactNode } from 'react';

import { Box } from '@/components/box';
import { Heading } from '@/components/heading';
import { Stack } from '@/components/stack';
import { Media } from '@/slices/DocumentLink/media';

/**
 * Props for `DocumentLink`.
 */
export type DocumentLinkProps = SliceComponentProps<Content.DocumentLinkSlice>;

/**
 * Component for "DocumentLink" Slices.
 */
const DocumentLink = ({ slice }: DocumentLinkProps): ReactNode => {
  if (!isFilled.contentRelationship(slice.primary.document)) {
    return null;
  }

  const data = slice.primary.document.data as Content.MediaSectionDocumentData;

  return (
    <Box
      use="section"
      space={['5xl', 'base']}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Stack space="xl">
        <Heading transform="uppercase" align="start">
          {data.title}
        </Heading>

        <Media items={data.media} />
      </Stack>
    </Box>
  );
};

export default DocumentLink;
