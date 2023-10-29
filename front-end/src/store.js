import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import menuListSlice from './slices/menuListSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuListSlice,
  },
});
