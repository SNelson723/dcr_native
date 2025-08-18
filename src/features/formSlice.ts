import { createSlice, type PayloadAction } from '@reduxjs/toolkit';


interface UserRow {
  id: number;
  name: string;
  email: string;
}

interface FormState {
  name: string;
  email: string;
  rows: UserRow[];
  maxId: number;
}

const initialState: FormState = {
  name: '',
  email: '',
  rows: [],
  maxId: 0,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setRows: (state, action: PayloadAction<UserRow[]>) => {
      state.rows = action.payload;
      state.maxId = action.payload.length;
    },
    resetRows: (state) => {
      state.rows = [];
      state.maxId = 0;
    },
  },
});

export const { setName, setEmail, setRows, resetRows } = formSlice.actions;
export default formSlice.reducer;
