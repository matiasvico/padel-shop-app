import { configureStore } from '@reduxjs/toolkit';
import { shopApi } from '../services/shopServices';
import cartReducer from '../redux/slices/cartSlice';
import { authApi } from '../services/authService';
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer: {
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware),
})