import { Bank } from './bank';
import { Hotel } from './hotel';

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  user_id: string;
  user_phone: string;
  user_name: string;
  user_photo: string;
  user_role: UserRole;
  hotel_id: string;
  bank_id: null;
  bank_account_name: null;
  bank_account_id: null;
  created_at: string;
  updated_at: string;
  hotel: Hotel;
  bank: Bank;
  wallet_balance: number;
};

export type UserRole = 'worker' | 'hotel' | null;
