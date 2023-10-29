import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const menuListSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuList: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const { setMenuList } = menuListSlice.actions;

export default menuListSlice.reducer;
