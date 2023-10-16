import { Time } from '@vidstack/react';

import { divider, group, time } from './time-group.css';

export function TimeGroup() {
  return (
    <div className={group}>
      <Time className={time} type="current" />
      <div className={divider}>/</div>
      <Time className={time} type="duration" />
    </div>
  );
}
