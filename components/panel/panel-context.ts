'use client';

import { createRequiredContext } from '@/utils/create-required-context';

import { PanelContext } from './panel.types';

export const [usePanelContext, PanelContextProvider] =
  createRequiredContext<PanelContext>();
