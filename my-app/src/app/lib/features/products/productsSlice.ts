"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a product
interface Product {
	id: string;
	name: string;
	price: number;
	// Add other product properties as needed
}

// Define the initial state for products
const initialState: Product[] = [];

// Create a slice for managing products
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// Reducer function to add a product to the state
		addProduct: (state, action: PayloadAction<Product>) => {
			state.push(action.payload);
		},
		// Add other reducer functions here as needed
	},
});

// Export actions from the slice
export const { addProduct } = productsSlice.actions;

// Export the reducer
export default productsSlice.reducer;
