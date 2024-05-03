import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "./productsSlice";

export interface ProductInCart {
	// productId: number;
	quantity: number;
	productDetails: Product;
}

interface Cart {
	products: ProductInCart[];
	isCartOpen: boolean;
}

const initialState: Cart = {
	products: [],
	isCartOpen: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProductToCart: (state, action: PayloadAction<ProductInCart>) => {
			// Check if the product already exists in the cart
			const existingProductIndex = state.products.findIndex(
				(product) =>
					product.productDetails.id === action.payload.productDetails.id
			);

			if (existingProductIndex !== -1) {
				// If the product exists, update its quantity
				state.products[existingProductIndex].quantity +=
					action.payload.quantity;
			} else {
				// If the product doesn't exist, add it to the cart
				state.products.push(action.payload);
			}
		},

		clearCart: (state) => {
			state.products = [];
		},

		handleOpenCloseCart: (state) => {
			state.isCartOpen = !state.isCartOpen;
		},

		deleteProduct: (state, action: PayloadAction<ProductInCart>) => {
			state.products = state.products.filter(
				(product) =>
					product.productDetails.id !== action.payload.productDetails.id
			);
		},

		editQuantity: (
			state,
			action: PayloadAction<{ productId: number; quantity: number }>
		) => {
			const { productId, quantity } = action.payload;
			const productIndex = state.products.findIndex(
				(product) => product.productDetails.id === productId
			);
			if (productIndex !== -1) {
				state.products[productIndex].quantity = quantity;
			}
		},
	},
});

export const {
	addProductToCart,
	clearCart,
	handleOpenCloseCart,
	deleteProduct,
	editQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
