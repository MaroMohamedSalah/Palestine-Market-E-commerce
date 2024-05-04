import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	user: userReducer,
	// Add other reducers here if needed
});

export default rootReducer;
