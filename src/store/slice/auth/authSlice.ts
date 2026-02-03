import { createSlice } from '@reduxjs/toolkit';
import { StorageKey } from '@constants';
import { User, UserRole } from '@type/models/user';
import { getDataStorage, removeDataStorage } from '@utils/storage';
import { AppDispatch } from '../../store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  role: UserRole;
  user: User | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRole: (state, action: PayloadAction<UserRole>) => {
      state.role = action.payload;
    },
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },

    resetAuth: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const { setToken, setRole, setAuth, resetAuth } = authSlice.actions;

export const loadAuth = () => async (dispatch: AppDispatch) => {
  try {
    const token = await getDataStorage<string>(StorageKey.TOKEN);
    const role = await getDataStorage<UserRole>(StorageKey.ROLE);
    const user = await getDataStorage<User>(StorageKey.USER);

    if (token && role && user) {
      dispatch(setAuth({ token, role, user }));
    }
  } catch {
    // console.error('Error loading auth info', error);
  }
};

export const clearAuth = () => async (dispatch: AppDispatch) => {
  await removeDataStorage(StorageKey.TOKEN);
  await removeDataStorage(StorageKey.ROLE);
  dispatch(resetAuth());
};

export default authSlice.reducer;
