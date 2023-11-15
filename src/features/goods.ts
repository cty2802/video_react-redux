import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGoods } from '../services/api';

type GoodsState = {
  goods: string[];
  loading: boolean;
  error: string;
}

const initialState: GoodsState = {
  goods: [],
  loading: false,
  error: '',
};

const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.goods.push(action.payload);
    },
    take: (state, action: PayloadAction<string>) => {
      state.goods = state.goods.filter(good => good !== action.payload);
    },
    clear: (state) => {
      state.goods = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(init.fulfilled, (state, action) => {
      state.goods = action.payload;
      state.loading = false;
    });

    builder.addCase(init.rejected, (state) => {
      state.loading = false;
      state.error = 'Error';
    });
  }
});

export const { add, take, clear } = goodsSlice.actions;
export default goodsSlice.reducer;

export const init = createAsyncThunk('goods/fetch', () => {
  return fetchGoods();
});
// () => {
//   return (dispatch: Dispatch) => {
//     dispatch(setLoading(true));

//     fetchGoods()
//     .then(goodsFromServer => {
//       dispatch(set(goodsFromServer));
//     })
//     .cattch(() => {
//       dispatch(setError('Something went wrong'));
//     })
//     .finally(() => {
//       dispatch(setLoading(false));
//     })
//   }; 
// }
