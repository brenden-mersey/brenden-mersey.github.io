import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
  name: '',
  initialState: {
    cards: {
      cards: {}
    }
  },
  reducers: {}
});

export const { increment, decrement, incrementByAmount } = cardsSlice.actions;

export default cardsSlice.reducer;
