import { useClickAway } from '@uidotdev/usehooks';
import { ForwardedRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import {
  panelOverlay,
  panelContent,
} from '@/components/panel/panel-content.css';
import { PanelContentProps } from '@/components/panel/panel-content.types';
import { usePanelContext } from '@/components/panel/panel-context';
import { mergeRefs } from '@/utils/merge-refs';

const PanelContent = (
  { children }: PanelContentProps,
  forwardedRef: ForwardedRef<any>,
) => {
  const { open, onClose } = usePanelContext();
  const ref = useClickAway(onClose);

  return createPortal(
    <>
      <div className={panelOverlay({ open })} />
      <div
        ref={mergeRefs([ref, forwardedRef])}
        className={panelContent({ open })}
      >
        {children}
      </div>
    </>,
    document.body,
  );
};

const WrappedPanelContent = forwardRef(PanelContent);

export { WrappedPanelContent as PanelContent };
