import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const existingProduct = state.items.find(item => item.id === newProduct.id);

            if (existingProduct) {
                existingProduct.cantidad += newProduct.cantidad;
                existingProduct.price += newProduct.price;
            } else {

                state.items.push({ ...newProduct });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload;
            state.items = state.items.filter(item => item.id !== productId);
        },

        clearCart: (state) => {
            state.items = [];
        }

    },
});

export const { setCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;



export default cartSlice.reducer;
