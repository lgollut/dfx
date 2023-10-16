import { isFilled, type Content } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { MediaPlayer } from '@/components/media-player';
import { Stack } from '@/components/stack';

type MediaProps = {
  items: Content.MediaSectionDocumentData['media'];
};

export const Media = ({ items }: MediaProps) => {
  const media = useMemo(() => {
    const files: ReactNode[] = [];

    for (const item of items) {
      if (!isFilled.linkToMedia(item.file)) {
        continue;
      }

      switch (item.media_type) {
        case 'Audio':
          files.push(
            <MediaPlayer
              type="audio"
              src={item.file.url}
              title={item.title ?? undefined}
            />,
          );
          continue;
        case 'Video':
          files.push(
            <MediaPlayer
              type="video"
              poster={item.poster}
              src={item.file.url}
              title={item.title ?? undefined}
            />,
          );
          continue;
        default:
          continue;
      }
    }

    return files;
  }, [items]);

  return <Stack>{media}</Stack>;
};
