import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import ProductSlice from "./services/ProductSlice";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    products: ProductSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
