import { createSlice } from "@reduxjs/toolkit";
import { Address } from '../Address/Address'


const initialState = { addresses: [...Address], selectedAddress: [], toggleForm: false }

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress(state, action) {
            state.addresses.push(action.payload);
        },

        displayAddress(state, action) {
            state.selectedAddress = action.payload;
        },
        toggle(state) {
            state.toggleForm = !state.toggleForm;
        },
        deleteAddress(state, action) {
            state.addresses = state.addresses.filter((address) => address.id !== action.payload);
        },
    }
})

export const { addAddress, displayAddress, toggle, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;