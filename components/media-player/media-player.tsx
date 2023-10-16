'use client';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { PrismicImageProps } from '@prismicio/react';
import {
  MediaPlayer as MediaPlayerPrimitive,
  MediaProvider,
  Poster,
} from '@vidstack/react';
import {
  DefaultAudioLayout,
  DefaultVideoLayout,
  defaultLayoutIcons,
} from '@vidstack/react/player/layouts/default';

import { Image } from '@/components/image';

import { posterStyle } from './media-player.css';

type MediaPlayerProps = {
  poster?: PrismicImageProps['field'];
  type: 'video' | 'audio';
  src: string;
  title?: string;
};

export const MediaPlayer = ({ poster, type, src, title }: MediaPlayerProps) => {
  if (!src) {
    return null;
  }

  return (
    <MediaPlayerPrimitive
      // className={player}
      title={title}
      src={src}
      crossorigin
    >
      <MediaProvider>
        {poster && (
          <Poster className={posterStyle} alt={''} asChild>
            <Image field={poster} />
          </Poster>
        )}
      </MediaProvider>

      {/* <VideoLayout /> */}
      <DefaultAudioLayout icons={defaultLayoutIcons} />
      <DefaultVideoLayout
        icons={defaultLayoutIcons}
        thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
      />
    </MediaPlayerPrimitive>
  );
};
