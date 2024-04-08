'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartSlice from './features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cart: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;