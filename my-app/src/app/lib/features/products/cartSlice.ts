import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductInCart {
	productId: number;
	quantity: number;
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
				(product) => product.productId === action.payload.productId
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
	},
});

export const { addProductToCart, clearCart, handleOpenCloseCart } =
	cartSlice.actions;

export default cartSlice.reducer;
