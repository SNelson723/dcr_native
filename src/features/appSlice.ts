import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from '../types';
import menuItems from '../fakeData/menuItems';

interface AppState {
  url: string;
  isLoading: boolean;
  error: string | null;
  menuItems: MenuItem[];
  loggedIn: boolean;
  token: string;
  username: string;
  password: string;
}

const initialState: AppState = {
  url: 'http://192.168.1.65:5000/', // need to use your local machine's IP address
  isLoading: false,
  error: null,
  menuItems: menuItems,
  loggedIn: false,
  token: '',
  username: '',
  password: '',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setMenuItems: (state, action: PayloadAction<MenuItem[]>) => {
      state.menuItems = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const {
  setLoading,
  setError,
  setMenuItems,
  setLoggedIn,
  setToken,
  setUsername,
  setPassword,
} = appSlice.actions;
export default appSlice.reducer;
