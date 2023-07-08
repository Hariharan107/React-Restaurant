import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  //   cart: [],
  cart: [
    {
      pizzaId: 12,
      name: 'TEST',
      quantity: 2,
      unitPrice: 23,
      totalPrice: 36,
    },
  ],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = state.quantity * state.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = state.quantity * state.unitPrice;
    },
    clearCart(state, action) {
      state.cart = initialState;
    },
  },
});
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
