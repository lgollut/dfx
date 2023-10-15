'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { PanelContextProvider } from '@/components/panel/panel-context';
import { PanelProps } from '@/components/panel/panel.types';

export const Panel = ({ children }: PanelProps) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <PanelContextProvider value={{ open, onOpen, onClose }}>
      {children}
    </PanelContextProvider>
  );
};
