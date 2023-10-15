import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  RefCallback,
  forwardRef,
} from 'react';

const VideoPlayer = (
  {
    playerRef,
    ...props
  }: ComponentPropsWithoutRef<'video'> & {
    playerRef: RefCallback<HTMLAudioElement>;
  },
  forwardedRef: ForwardedRef<any>,
) => {
  return (
    <video
      ref={playerRef}
      // style={{
      //   width: '100%',
      //   height: '100%',
      //   objectFit: 'cover',
      // }}
      {...props}
    />
  );
};

const WrappedVideoPlayer = forwardRef(VideoPlayer);

export { WrappedVideoPlayer as VideoPlayer };
