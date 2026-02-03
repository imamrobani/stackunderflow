import { Statuses } from '@constants';

export type EventStatus = (typeof Statuses)[keyof typeof Statuses];

export type TabItem = {
  key: string;
  label: string;
};

export type DropdownItem = {
  key: string;
  label: string;
};
