import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  RefCallback,
  forwardRef,
} from 'react';

const AudioPlayer = (
  {
    playerRef,
    ...props
  }: ComponentPropsWithoutRef<'audio'> & {
    playerRef: RefCallback<HTMLAudioElement>;
  },
  forwardedRef: ForwardedRef<any>,
) => {
  return <audio ref={playerRef} {...props} />;
};

const WrappedAudioPlayer = forwardRef(AudioPlayer);

export { WrappedAudioPlayer as AudioPlayer };
