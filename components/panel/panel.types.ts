import { ReactNode, SyntheticEvent } from 'react';

export type PanelProps = {
  children: ReactNode;
  open?: boolean;
};

export type PanelContext = {
  open: boolean;
  onOpen: (e?: SyntheticEvent | Event) => void;
  onClose: (e?: SyntheticEvent | Event) => void;
};
