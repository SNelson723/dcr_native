import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  name: string;
  email: string;
}

const initialState: FormState = {
  name: '',
  email: '',
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
  },
});

export const { setName, setEmail } = formSlice.actions;
export default formSlice.reducer;
