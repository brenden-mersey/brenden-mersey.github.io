import { createSlice } from '@reduxjs/toolkit';

export const quizzesSlice = createSlice({
  name: '',
  initialState: {
    quizzes: {
      quizzes: {}
    }
  },
  reducers: {}
});

export const { increment, decrement, incrementByAmount } = quizzesSlice.actions;

export default quizzesSlice.reducer;
