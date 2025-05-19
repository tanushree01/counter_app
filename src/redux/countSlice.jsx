// redux/countSlice.js
import { createSlice } from '@reduxjs/toolkit';

const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    incrementValue: (state) => {
      state.count += 1;
    },
    decrementValue: (state) => {
      state.count -= 1;
    },
  },
});

export const { incrementValue, decrementValue } = countSlice.actions;
export default countSlice.reducer;
