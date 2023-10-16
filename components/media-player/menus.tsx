import {
  Menu,
  Tooltip,
  useCaptionOptions,
  type MenuPlacement,
  type TooltipPlacement,
} from '@vidstack/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClosedCaptionsIcon,
  SettingsIcon,
} from '@vidstack/react/icons';

import { button } from './buttons.css';
import {
  menu,
  menuButton,
  rotateIcon,
  submenu,
  submenuButton,
  submenuIcon,
  submenuOpenIcon,
  submenuCloseIcon,
  submenuLabel,
  submenuHint,
  radioGroup,
  radio,
  radioCheck,
} from './menu.css';
import { tooltip } from './tooltip.css';

export interface SettingsProps {
  placement: MenuPlacement;
  tooltipPlacement: TooltipPlacement;
}

export function Settings({ placement, tooltipPlacement }: SettingsProps) {
  return (
    <Menu.Root className="menu">
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Menu.Button className={`${menuButton} ${button}`}>
            <SettingsIcon className={rotateIcon} />
          </Menu.Button>
        </Tooltip.Trigger>
        <Tooltip.Content className={tooltip} placement={tooltipPlacement}>
          Settings
        </Tooltip.Content>
      </Tooltip.Root>
      <Menu.Content className={menu} placement={placement}>
        <CaptionSubmenu />
      </Menu.Content>
    </Menu.Root>
  );
}

function CaptionSubmenu() {
  const options = useCaptionOptions();
  const hint = options.selectedTrack?.label ?? 'Off';

  return (
    <Menu.Root>
      <SubmenuButton
        label="Captions"
        hint={hint}
        disabled={options.disabled}
        icon={ClosedCaptionsIcon}
      />
      <Menu.Content className={submenu}>
        <Menu.RadioGroup className={radioGroup} value={options.selectedValue}>
          {options.map(({ label, value, select }) => (
            <Menu.Radio
              className={radio}
              value={value}
              onSelect={select}
              key={value}
            >
              <div className={radioCheck} />
              <span>{label}</span>
            </Menu.Radio>
          ))}
        </Menu.RadioGroup>
      </Menu.Content>
    </Menu.Root>
  );
}

export interface SubmenuButtonProps {
  label: string;
  hint: string;
  disabled?: boolean;
  icon: JSX.ElementType;
}

function SubmenuButton({
  label,
  hint,
  icon: Icon,
  disabled,
}: SubmenuButtonProps) {
  return (
    <Menu.Button className={submenuButton} disabled={disabled}>
      <ChevronLeftIcon className={submenuCloseIcon} />
      <Icon className={submenuIcon} />
      <span className={submenuLabel}>{label}</span>
      <span className={submenuHint}>{hint}</span>
      <ChevronRightIcon className={submenuOpenIcon} />
    </Menu.Button>
  );
}
