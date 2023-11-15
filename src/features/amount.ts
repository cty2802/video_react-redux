import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { moveRight } from './position';

const amountSlice = createSlice({
  name: 'amount',
  initialState: 0,
  reducers: {
    add: (value, action: PayloadAction<number>) => value + action.payload,
    take: (value, action: PayloadAction<number>) => value - action.payload,
    clear: () => 0,
  },
  extraReducers: (builder) => {
    builder.addCase(moveRight.type, (value) => value + 1);
  },
})

export default amountSlice.reducer;
export const { actions } = amountSlice;
