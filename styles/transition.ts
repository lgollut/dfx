import { vars } from './contract.css';

export const transition: (
  props: string | string[],
  options?: {
    duration?: keyof typeof vars.duration;
    easing?: keyof typeof vars.easing;
    delay?: string;
  },
) => string = (props = ['all'], options = {}) =>
  (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp) =>
        `${animatedProp} ${
          options.duration
            ? vars.duration[options.duration]
            : vars.duration.base
        } ${options.easing ? vars.easing[options.easing] : vars.easing.inOut} ${
          options.delay || '0ms'
        }`,
    )
    .join(',');
