import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the interface for a user
export interface User {
	token: string | null;
	userInfo:
		| {
				address: {
					geolocation: {
						lat: string;
						long: string;
					};
					city: string;
					street: string;
					number: number;
					zipcode: string;
				};
				id: number;
				email: string;
				username: string;
				password: string;
				name: {
					firstname: string;
					lastname: string;
				};
				phone: string;
				__v: number;
		  }
		| [];
}

// Check if a token is stored in localStorage
const storedToken =
	typeof window !== "undefined" ? localStorage.getItem("token") : null;

// Define the initial state for user
export const initialState: User = {
	token: storedToken ?? null, // Use the stored token if it exists, otherwise default to null
	userInfo: [],
};

// Create a slice for managing user
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		startSession: (state, action: PayloadAction<string>) => {
			// Update the user state with the token
			if (typeof window !== "undefined") {
				localStorage.setItem("token", action.payload);
			}
			state.token = action.payload;
		},
		endSession: (state) => {
			if (typeof window !== "undefined") {
				localStorage.removeItem("token");
			}
			state.token = null;
		},
	},
});

// Export actions from the slice
export const { startSession, endSession } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
