import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {
      topics: {}
    }
  },
  reducers: {
    addTopic: (state, action) => {
      // action payload will look like: {id: '123456', name: 'name of topic', icon: 'icon url'}
      const { id, name, icon } = action.payload;
      state.topics.topics[id] = {
        id,
        name,
        icon,
        quizIds:[]
      };
    }
  }
});

export const { addTopic } = topicsSlice.actions;

export default topicsSlice.reducer;
