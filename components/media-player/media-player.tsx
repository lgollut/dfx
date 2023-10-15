'use client';

import { ImageField } from '@prismicio/client';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { clsx } from 'clsx';
import { Pause, Play, Volume2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, {
  ComponentPropsWithoutRef,
  Reducer,
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { Button } from '@/components/button';
import { Cluster } from '@/components/cluster';
import { Frame } from '@/components/frame/frame';
import { FrameVariants } from '@/components/frame/frame.types';
import { Image } from '@/components/image';
import {
  mediaPlayerControls,
  mediaPlayerControlsButtons,
  mediaPlayerControlsCenter,
  mediaPlayerControlsEnd,
  mediaPlayerControlsStart,
  mediaPlayerProgress,
  mediaPlayerProgressBuffer,
  mediaPlayerProgressRange,
  mediaPlayerTimeline,
  mediaPlayerWrapper,
  posterVar,
  progressValue,
  rangeValueVar,
} from '@/components/media-player/media-player.css';
import { Text } from '@/components/text';

export type MediaPlayerProps = ComponentPropsWithoutRef<'div'> & {
  src: string;
  type: 'audio' | 'video';
  poster?: ImageField;
  ratio: FrameVariants['ratio'];
};

type MediaPlayerState = {
  playing: boolean;
  ended: boolean;
  seeking: boolean;
  currentTime: number;
  duration: number;
  progress: number;
  buffered: TimeRanges | null;
  showControls: boolean;
};

type MediaPlayerAction =
  | { type: 'play' }
  | { type: 'pause' }
  | { type: 'seek'; payload: { to: number } }
  | { type: 'currentTime'; payload: { currentTime: number } }
  | { type: 'duration'; payload: { duration: number } }
  | { type: 'progress'; payload: { buffered: TimeRanges } }
  | { type: 'load'; payload: { buffered: TimeRanges } }
  | { type: 'showControls'; payload: { show: boolean } };

export const getHours = (value: number) => Math.trunc((value / 60 / 60) % 60);
export const getMinutes = (value: number) => Math.trunc((value / 60) % 60);
export const getSeconds = (value: number) => Math.trunc(value % 60);

const AudioPlayer = dynamic(
  () => import('./audio-player').then(({ AudioPlayer }) => AudioPlayer),
  { ssr: false },
);

const VideoPlayer = dynamic(
  () => import('./video-player').then(({ VideoPlayer }) => VideoPlayer),
  { ssr: false },
);

function formatTime(time: number) {
  const pad = (value: number) => String(value).padStart(2, '0');

  const hours = getHours(time);

  return `${hours > 0 ? `${pad(hours)}:` : ''}${pad(getMinutes(time))}:${pad(
    getSeconds(time),
  )}`;
}

const reducer: Reducer<MediaPlayerState, MediaPlayerAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'load':
      return {
        ...state,
        buffered: action.payload.buffered,
      };
    case 'play':
      return {
        ...state,
        playing: true,
      };
    case 'pause':
      return {
        ...state,
        playing: false,
      };
    case 'seek':
      return {
        ...state,
        seeking: true,
        currentTime: action.payload.to,
      };
    case 'progress':
      return {
        ...state,
        buffered: action.payload.buffered,
      };
    case 'currentTime':
      return {
        ...state,
        currentTime: action.payload.currentTime,
      };
    case 'duration':
      return {
        ...state,
        duration: action.payload.duration,
      };
    default:
      return state;
  }
};

const initialState: MediaPlayerState = {
  playing: false,
  ended: false,
  seeking: false,
  currentTime: 0,
  duration: 0,
  progress: 0,
  buffered: null,
  showControls: true,
};

export const MediaPlayer = ({
  type,
  src,
  poster,
  className,
  ratio,
}: MediaPlayerProps) => {
  const Component = useMemo(() => {
    return type === 'audio' ? AudioPlayer : VideoPlayer;
  }, [type]);
  const [mediaState, dispatch] = useReducer(reducer, initialState);

  const [player, setPlayer] = useState<HTMLMediaElement | null>(null);

  // durationchange loadeddata loadedmetadata
  const onDurationChange = useCallback(
    (e: SyntheticEvent) => {
      if (!(e.target instanceof HTMLMediaElement)) {
        return;
      }

      dispatch({
        type: 'duration',
        payload: { duration: e.target.duration },
      });
    },
    [dispatch],
  );

  const onLoadedData = useCallback(
    (e: SyntheticEvent) => {
      if (!(e.target instanceof HTMLMediaElement)) {
        return;
      }

      dispatch({
        type: 'load',
        payload: { buffered: e.target.buffered },
      });
    },
    [dispatch],
  );

  // progress playing seeking seeked
  const onProgressChange = useCallback(
    (e: SyntheticEvent) => {
      if (!(e.target instanceof HTMLMediaElement)) {
        return;
      }

      dispatch({
        type: 'progress',
        payload: { buffered: e.target.buffered },
      });
    },
    [dispatch],
  );

  // timeupdate seeking seeked
  const onTimeUpdate = useCallback((e: SyntheticEvent) => {
    if (!(e.target instanceof HTMLMediaElement)) {
      return;
    }

    dispatch({
      type: 'currentTime',
      payload: { currentTime: e.target.currentTime },
    });
  }, []);

  const handleSeek = useCallback(
    (e: SyntheticEvent) => {
      if (
        !(e.target instanceof HTMLInputElement) ||
        e.target.type !== 'range'
      ) {
        return;
      }

      if (!player) {
        return;
      }

      player.pause();

      const to =
        (Number(e.target.value) / Number(e.target.max)) * mediaState.duration;

      dispatch({
        type: 'seek',
        payload: {
          to,
        },
      });

      player.currentTime = to;
    },
    [player, mediaState.duration],
  );

  const handlePlay = useCallback(async () => {
    if (!player) {
      return;
    }

    dispatch({ type: 'play' });

    await player.play();
  }, [player]);

  const handlePause = useCallback(() => {
    if (!player) {
      return;
    }

    dispatch({ type: 'pause' });

    player.pause();
  }, [player]);

  useEffect(() => {
    if (!player) {
      return;
    }

    if (mediaState.playing) {
      player.play();
    } else {
      player.pause();
    }
  }, [player, mediaState.playing]);

  const handleProgress = useCallback(
    (e: SyntheticEvent) => {
      onProgressChange(e);
    },
    [onProgressChange],
  );

  const handlePlaying = useCallback(
    (e: SyntheticEvent) => {
      onProgressChange(e);
    },
    [onProgressChange],
  );

  const handleSeeking = useCallback(
    (e: SyntheticEvent) => {
      onProgressChange(e);
      onTimeUpdate(e);
    },
    [onProgressChange, onTimeUpdate],
  );

  const handleSeeked = useCallback(
    (e: SyntheticEvent) => {
      onProgressChange(e);
      onTimeUpdate(e);
    },
    [onProgressChange, onTimeUpdate],
  );

  const handleTimeupdate = useCallback(
    (e: SyntheticEvent) => {
      onTimeUpdate(e);
    },
    [onTimeUpdate],
  );

  const handleDurationchange = useCallback(
    (e: SyntheticEvent) => {
      onDurationChange(e);
    },
    [onDurationChange],
  );

  const handleLoadedData = useCallback(
    (e: SyntheticEvent) => {
      onDurationChange(e);
      onLoadedData(e);
    },
    [onDurationChange, onLoadedData],
  );

  const handleLoadedMetadata = useCallback(
    (e: SyntheticEvent) => {
      onDurationChange(e);
    },
    [onDurationChange],
  );

  const formattedCurrentTime = useMemo(() => {
    return formatTime(mediaState.currentTime);
  }, [mediaState.currentTime]);

  const formattedDuration = useMemo(() => {
    return formatTime(mediaState.duration);
  }, [mediaState.duration]);

  const buffered = useMemo(() => {
    if (
      !player ||
      mediaState.buffered === null ||
      mediaState.buffered.length === 0 ||
      mediaState.duration === 0
    ) {
      return 0;
    }

    return mediaState.buffered.end(0) / mediaState.duration;
  }, [player, mediaState.buffered, mediaState.duration]);

  const rangeValue = useMemo(() => {
    if (mediaState.duration === 0) {
      return 0;
    }

    return (mediaState.currentTime / mediaState.duration) * 100;
  }, [mediaState.currentTime, mediaState.duration]);

  const handleMouseDown = useCallback(() => {
    if (!player) {
      return;
    }

    player.pause();
  }, [player]);

  const handleMouseUp = useCallback(() => {
    if (!player) {
      return;
    }

    if (mediaState.playing) {
      player.play();
    }
  }, [player, mediaState.playing]);

  return (
    <div
      className={clsx(mediaPlayerWrapper, className)}
      style={
        (poster?.url &&
          assignInlineVars({
            [posterVar]: `url(${poster?.url})`,
          })) ||
        {}
      }
      onMouseEnter={() => {
        console.log('over');
        if (!player) {
          return;
        }
      }}
    >
      {poster && <Frame use={Image} field={poster} ratio={ratio} />}
      <Component
        playerRef={setPlayer}
        src={src}
        onTimeUpdate={handleTimeupdate}
        onLoadedData={handleLoadedData}
        onLoadedMetadata={handleLoadedMetadata}
        onDurationChange={handleDurationchange}
        onSeeked={handleSeeked}
        onPlaying={handlePlaying}
        onSeeking={handleSeeking}
        onProgress={handleProgress}
      />

      <div className={mediaPlayerControls}>
        <div className={mediaPlayerTimeline}>
          <div className={mediaPlayerProgress}>
            <input
              className={mediaPlayerProgressRange}
              type="range"
              min={0}
              max={100}
              step={0.01}
              value={rangeValue}
              onInput={handleSeek}
              role="slider"
              aria-label="Seek"
              aria-valuemax={100}
              aria-valuenow={mediaState.currentTime}
              aria-valuetext={`${formattedCurrentTime} of ${formattedDuration}`}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              style={assignInlineVars({
                [rangeValueVar]: `${rangeValue}%`,
              })}
            />
            <progress
              className={mediaPlayerProgressBuffer}
              max={100}
              value={buffered * 100}
              role="progressbar"
              aria-hidden={true}
              style={assignInlineVars({
                [progressValue]: `${buffered * 100}%`,
              })}
            >
              % buffered
            </progress>
          </div>

          <Cluster justify="spaceBetween">
            <Text variant="bodySmall" aria-label="Current time">
              {formattedCurrentTime}
            </Text>

            <Text variant="bodySmall" aria-label="Media duration">
              {formattedDuration}
            </Text>
          </Cluster>
        </div>
        <div className={mediaPlayerControlsButtons}>
          <div className={mediaPlayerControlsStart}>
            <Button variant="bare" icon={Volume2} size="lg" iconOnly>
              {'Play media'}
            </Button>
          </div>
          <div className={mediaPlayerControlsCenter}>
            <Button
              variant="bare"
              icon={player?.paused ? Play : Pause}
              size="xl"
              iconOnly
              onClick={mediaState.playing ? handlePause : handlePlay}
            >
              {'Play media'}
            </Button>
          </div>
          <div className={mediaPlayerControlsEnd}></div>
        </div>
      </div>
    </div>
  );
};
