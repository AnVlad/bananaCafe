import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    increaseQuantity: (state, action) => {
      const elementToReplace = action.payload;
      return state.map((elem) =>
        elem.id === elementToReplace.id ? elementToReplace : elem
      );
    },
    reduceQuantity: (state, action) => {
      const elementToReplace = action.payload;
      return state.map((elem) =>
        elem.id === elementToReplace.id ? elementToReplace : elem
      );
    },
    deleteFromCart: (state, action) => {
      const elementToDelete = action.payload;
      return state.filter((elem) => elem.id !== elementToDelete.id);
    },
  },
});

export const { addToCart, increaseQuantity, reduceQuantity, deleteFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
