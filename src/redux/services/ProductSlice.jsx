import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  favouriteItems: [],
  totalAmount: 0,
  quantity: 0
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addtoCart: (state, { payload }) => {
      const isExisted = state.cartItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.cartItems = [...state.cartItems, { ...payload, quantity: 1 }];
      }
      state.quantity++;
      state.totalAmount += payload.price;
    },
    addtoFavourite: (state, { payload }) => {
      const isExisted = state.favouriteItems.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.favouriteItems = [...state.favouriteItems, { ...payload, quantity: 1 }];
      }
      state.quantity++;
      // state.totalAmount += payload.price;
    },
    removefromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.totalAmount -= payload.price * payload.quantity;
      state.quantity--;
    },
    addItemsQuantity: (state, { payload }) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      state.quantity++;
      state.totalAmount += payload.price;
    },
    minusItemsQuantity: (state, { payload }) => {
      const subItem = state.cartItems.find((item) => item.id === payload.id);
      state.cartItems = state.cartItems.map((item) => {
        if (subItem.quantity > 1) {
          if (item.id === payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }else{
            return subItem
        }
      });
        state.quantity--;
        state.totalAmount -= payload.price
    }
  }
});

export const {
  addtoCart,
  removefromCart,
  addItemsQuantity,
  minusItemsQuantity,
  addtoFavourite
} = ProductSlice.actions;

export default ProductSlice.reducer;
