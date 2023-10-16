import { Captions, ChapterTitle, Controls, Gesture } from '@vidstack/react';
import dynamic from 'next/dynamic';

import { Caption, Fullscreen, Mute, PIP, Play } from './buttons';
import { captions } from './captions.css';
import { title } from './chapter-title.css';
import { Time, Volume } from './sliders';
import { TimeGroup } from './time-group';
import { controls, controlsGroup, gesture, spacer } from './video-layout.css';

const DynamicSettings = dynamic(
  () => import('./menus').then(({ Settings }) => Settings),
  {
    ssr: false,
  },
);

export interface VideoLayoutProps {
  thumbnails?: string;
}

export function VideoLayout({ thumbnails }: VideoLayoutProps) {
  return (
    <>
      <Gestures />
      <Captions className={captions} />
      <Controls.Root className={controls}>
        <div className={spacer} />
        <Controls.Group className={controlsGroup}>
          <Time thumbnails={thumbnails} />
        </Controls.Group>
        <Controls.Group className={controlsGroup}>
          <Play tooltipPlacement="top start" />
          <Mute tooltipPlacement="top" />
          <Volume />
          <TimeGroup />
          <ChapterTitle className={title} />
          <div className={spacer} />
          <Caption tooltipPlacement="top" />
          <DynamicSettings placement="top end" tooltipPlacement="top" />
          <PIP tooltipPlacement="top" />
          <Fullscreen tooltipPlacement="top end" />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

function Gestures() {
  return (
    <>
      <Gesture className={gesture} event="pointerup" action="toggle:paused" />
      <Gesture
        className={gesture}
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      <Gesture className={gesture} event="pointerup" action="toggle:controls" />
      <Gesture className={gesture} event="dblpointerup" action="seek:-10" />
      <Gesture className={gesture} event="dblpointerup" action="seek:10" />
    </>
  );
}
