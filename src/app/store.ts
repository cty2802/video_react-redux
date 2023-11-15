// npm i redux @types/redux
import { configureStore } from '@reduxjs/toolkit';

import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const store = configureStore({
  reducer: {
    amount: amountReducer,
    goods: goodsReducer,
    position: positionReducer,
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;