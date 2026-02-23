import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartProductType } from '@/lib/definitions'

import type { RootState } from '@/redux/store';
// import Product from '@/app/(admin)/product/page';

 const initialState = {
    product: [] as cartProductType[],
    totalPrice: 0,
 }

 const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCard: (state,action: PayloadAction<cartProductType>) => {
            state.product.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            // find product by id 
            const product = state.product.find((product) => {
                product.id === action.payload;
            })

            state.totalPrice -= product?.price || 0;
            state.product= state.product.filter(product => product.id !== action.payload)
        }
    }
 })

 // export action 

 export const { addToCard, removeFromCart } = cartSlice.actions;
 export default cartSlice.reducer;

 // select Prodict

 export const selectProduct = (state: RootState) => state.cart.product;
 export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;