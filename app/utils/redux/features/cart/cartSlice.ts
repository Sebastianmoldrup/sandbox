import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    name: string;
    price: number;
}

interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;