import { User } from './user';

export type RequestOTP = {
  message: string;
  note: string;
  otp_code: string;
};

export type VerifyOTP = {
  access_token: string;
  token_type: string;
  expires_in: string;
  user: User;
};
