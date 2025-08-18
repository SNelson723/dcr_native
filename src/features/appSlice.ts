import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { MenuItem } from '../types';
import menuItems from '../fakeData/menuItems';

interface AppState {
  url: string;
  isLoading: boolean;
  error: string | null;
  menuItems: MenuItem[];
}

const initialState: AppState = {
  url: 'http://127.0.0.1:5000/',
  isLoading: false,
  error: null,
  menuItems: menuItems,
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
  },
});

export const { setLoading, setError, setMenuItems } = appSlice.actions;
export default appSlice.reducer;
