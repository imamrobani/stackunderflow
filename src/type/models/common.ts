import { QRStatus, Statuses } from '@constants';

export type EventStatus = (typeof Statuses)[keyof typeof Statuses];

export type QRType = (typeof QRStatus)[keyof typeof QRStatus];

export type TabItem = {
  key: string;
  label: string;
};

export type DropdownItem = {
  key: string;
  label: string;
};
