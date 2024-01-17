import { isFilled, type Content } from '@prismicio/client';
import { ReactNode, useMemo } from 'react';

import { Heading } from '../../components/heading';
import { MediaPlayer } from '@/components/media-player';
import { Stack } from '@/components/stack';

type MediaProps = {
  items: Content.MediaSectionDocumentData['media'];
};

export const Media = ({ items }: MediaProps) => {
  const { audio, video } = useMemo(() => {
    const audio: ReactNode[] = [];
    const video: ReactNode[] = [];

    for (const item of items) {
      if (!isFilled.linkToMedia(item.file)) {
        continue;
      }

      switch (item.media_type) {
        case 'Audio':
          audio.push(
            <MediaPlayer
              type="audio"
              src={item.file.url}
              title={item.title ?? undefined}
            />,
          );
          continue;
        case 'Video':
          video.push(
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

    return { audio, video };
  }, [items]);

  return (
    <Stack space="2xl">
      <Stack space="lg">
        <Heading use="h3">Vidéo</Heading>
        <Stack>{video}</Stack>
      </Stack>
      <Stack space="lg">
        <Heading use="h3">Audio</Heading>
        <Stack>{audio}</Stack>
      </Stack>
    </Stack>
  );
};
