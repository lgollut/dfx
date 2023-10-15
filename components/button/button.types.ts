import { LucideIcon } from 'lucide-react';
import { LinkProps } from 'next/link';
import { ComponentPropsWithRef, ElementType, ComponentType } from 'react';

import { DistributiveOmit } from '@/types/distributive-omit';

import { ButtonVariants } from './button.css';

import type { Route } from 'next';
import type { UrlObject } from 'url';

type OverriddenLinkProps<TRoute extends string> = Omit<
  LinkProps<TRoute>,
  'href'
> & {
  href: Route<TRoute> | UrlObject;
};

type MayBeLinkProps<TRoute extends string> = {
  use?: never;
  icon?: LucideIcon;
  href?: Route<TRoute> | UrlObject;
};

type NonLinkProps<TUse> = {
  use?: TUse;
  icon?: LucideIcon;
  /**
   * `href` is only allowed without the `use` prop
   */
  href?: never;
};

export type ButtonProps<
  TUse extends ElementType,
  TRoute extends string,
> = (ElementType extends TUse ? MayBeLinkProps<TRoute> : NonLinkProps<TUse>) &
  DistributiveOmit<
    ComponentPropsWithRef<
      ElementType extends TUse
        ? TRoute extends string
          ? string extends TRoute
            ? 'button'
            : ComponentType<OverriddenLinkProps<TRoute>>
          : never
        : TUse
    >,
    'use'
  > &
  ButtonVariants;
