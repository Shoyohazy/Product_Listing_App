import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    loading: false,
    error: false,
}
// feching product list [GET REQUEST ]
export const getProducts = createAsyncThunk("products/getProducts", async (args, { rejectWithValue }) => {

    const response = await fetch('https://fakestoreapi.com/products');

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
})

// Creating a Product and adding to the list [POST REQUEST]

export const createProduct = createAsyncThunk("products/createProduct", async (addedProduct, { rejectWithValue }) => {
    const response = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(addedProduct),
    })
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
})
//Delete Product from the list [DELETE REQUEST]
export const deleteProduct = createAsyncThunk("products/deleteProduct", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
    })
    try {
        const result = await response.json();
        return result
    } catch (error) {
        return rejectWithValue(error);
    }
})
//Update product in the list [PUT]
export const updateProduct = createAsyncThunk('users/UpdateUser', async (updatedProduct, { rejectWithValue }) => {
    const response = await fetch(`https://fakestoreapi.com/products/${updatedProduct.id}`, {
        method: "PUT",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(updatedProduct)
    })
    try {

        const result = await response.json();
        return result

    } catch (error) {
        return rejectWithValue(error)
    }
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            // state.products.push(action.payload)
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(createProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(createProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.products.push(action.payload)
        })
        builder.addCase(createProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(deleteProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.products = state.products.filter((item) => item.id !== id);
            }
        })
        builder.addCase(deleteProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        builder.addCase(updateProduct.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateProduct.fulfilled, (state, action) => {
            state.loading = false;
            const { id } = action.payload;
            if (id) {
                state.products = state.products.map((product) => {
                    if (product.id === id) {
                        product = action.payload;
                    }
                    return product;
                });
            }
        })
        builder.addCase(updateProduct.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

    }
});

export const { deleteItem } = productSlice.actions;

export default productSlice.reducer;