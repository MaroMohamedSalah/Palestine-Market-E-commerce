import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/products/cartSlice";

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	// Add other reducers here if needed
});

export default rootReducer;
