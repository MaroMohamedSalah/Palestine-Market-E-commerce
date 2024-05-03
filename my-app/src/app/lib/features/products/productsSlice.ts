"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a product
export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

// Define the initial state for products
export const initialState: Product[] = [];

// Create a slice for managing products
const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		// Reducer function to add a product to the state
		addProduct: (state, action: PayloadAction<Product>) => {
			state.push(action.payload);
		},
		initProducts: (state, action: PayloadAction<Product[]>) => {
			// Replace the current state with the array of products from the action payload
			return action.payload;
		},
	},
});

// Export actions from the slice
export const { addProduct, initProducts } = productsSlice.actions;

// Export the reducer
export default productsSlice.reducer;
