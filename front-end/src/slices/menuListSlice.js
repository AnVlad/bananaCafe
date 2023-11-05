import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import dishes from '../services/dishes';

const initialState = [];

export const setDefaultDishes = createAsyncThunk(
  'dishes/setDefaultDishes',
  async () => {
    const shipmentList = await dishes.getDishes();
    return shipmentList;
  }
);

export const menuListSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuList: (state, action) => {
      state.push(...action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setDefaultDishes.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(setDefaultDishes.rejected, (state, action) => {
        console.error(action.error);
        console.log(`
          Please, run the back-end localhost to see menu
        `);
      });
  },
});

export const { setMenuList } = menuListSlice.actions;

export default menuListSlice.reducer;
