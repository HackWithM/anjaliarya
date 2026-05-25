import { configureStore } from '@reduxjs/toolkit';
import uiReducer from '../features/ui/uiSlice';
import productsReducer from '../features/products/productsSlice';
import contactReducer from '../features/contact/contactSlice';
import inquiryReducer from '../features/inquiry/inquirySlice';

// Central Redux store assembly combining our architectural slices
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    products: productsReducer,
    contact: contactReducer,
    inquiry: inquiryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
