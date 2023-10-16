import { TimeSlider, VolumeSlider } from '@vidstack/react';

import {
  slider,
  sliderSmall,
  track,
  trackFill,
  progress,
  chapters,
  chapter,
  preview,
  chapterTitle,
  timeValue,
  volumeValue,
  thumbnail,
  thumb,
} from './sliders.css';

export function Volume() {
  return (
    <VolumeSlider.Root className={`volume-slider ${slider} ${sliderSmall}`}>
      <VolumeSlider.Track className={track} />
      <VolumeSlider.TrackFill className={`${trackFill} ${track}`} />
      <VolumeSlider.Preview className={preview} noClamp>
        <VolumeSlider.Value
          className={volumeValue}
          type="pointer"
          format="percent"
        />
      </VolumeSlider.Preview>
      <VolumeSlider.Thumb className={thumb} />
    </VolumeSlider.Root>
  );
}

export interface TimeSliderProps {
  thumbnails?: string;
}

export function Time({ thumbnails }: TimeSliderProps) {
  return (
    <TimeSlider.Root className={`time-slider ${slider}`}>
      <TimeSlider.Chapters className={chapters}>
        {(cues, forwardRef) =>
          cues.map((cue) => (
            <div className={chapter} key={cue.startTime} ref={forwardRef}>
              <TimeSlider.Track className={track} />
              <TimeSlider.TrackFill className={`${trackFill} ${track}`} />
              <TimeSlider.Progress className={`${progress} ${track}`} />
            </div>
          ))
        }
      </TimeSlider.Chapters>

      <TimeSlider.Thumb className={thumb} />

      <TimeSlider.Preview className={preview}>
        {thumbnails ? (
          <TimeSlider.Thumbnail.Root src={thumbnails} className={thumbnail}>
            <TimeSlider.Thumbnail.Img />
          </TimeSlider.Thumbnail.Root>
        ) : null}

        <TimeSlider.ChapterTitle className={chapterTitle} />

        <TimeSlider.Value className={timeValue} type="pointer" format="time" />
      </TimeSlider.Preview>
    </TimeSlider.Root>
  );
}
