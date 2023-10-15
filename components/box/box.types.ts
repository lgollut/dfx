import { ComponentPropsWithRef, ElementType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { BoxVariants } from './box.css';

export type Space = NonNullable<
  Pick<BoxVariants, 'spaceBlockStart'>['spaceBlockStart']
>;

type BaseBoxProps<TUse> = {
  use?: TUse;
  space?: (Space | undefined) | [Space, Space] | [Space, Space, Space, Space];
} & Omit<
  BoxVariants,
  'spaceBlockStart' | 'spaceInlineEnd' | 'spaceBlockEnd' | 'spaceInlineStart'
>;
type OmittedProps = 'use' | keyof BoxVariants;

export type BoxProps<TUse extends ElementType> = BaseBoxProps<TUse> &
  DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TUse ? 'div' : TUse>,
    OmittedProps
  >;
