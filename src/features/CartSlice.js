import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, totalAmount: 0, }

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //logic for adding item in cart if it is new make a new object or use 
        addCartItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    quantity: 1,
                    price: parseFloat(newItem.price),
                    totalPrice: newItem.price,
                    name: newItem.title,
                    image: newItem.image,
                })
                state.totalAmount += parseFloat(newItem.price);
            }
            else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
                state.totalAmount += existingItem.price;
            }
        },
        removeCartItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
                state.totalAmount -= existingItem.price;
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                state.totalAmount -= existingItem.price;
            }

        },

    }
})

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;