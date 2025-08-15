import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BasicCompState {
  text: string;
}

const initialState: BasicCompState = {
  text: '',
};

const basicCompSlice = createSlice({
  name: 'basicComp',
  initialState,
  reducers: {
    setText(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

export const { setText } = basicCompSlice.actions;
export default basicCompSlice.reducer;
