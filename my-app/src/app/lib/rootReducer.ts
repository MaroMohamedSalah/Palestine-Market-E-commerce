import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice"; // Adjust the path based on your file structure

const rootReducer = combineReducers({
	products: productsReducer,
	// Add other reducers here if needed
});

export default rootReducer;
