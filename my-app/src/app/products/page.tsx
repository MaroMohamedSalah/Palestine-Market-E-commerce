"use client";

import { useEffect, useState } from "react";
import CelebrationAnimation from "../components/CelebrationAnimation";
import Navbar from "../components/Navbar";
import { isLoggedIn } from "../services/authService";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useAppDispatch } from "../lib/hooks";
import { addProduct } from "../lib/features/products/productsSlice";

const Products = () => {
	const dispatch = useAppDispatch();
	const loggedIn = isLoggedIn();
	const router = useRouter();
	useEffect(() => {
		if (!loggedIn) {
			router.push("/login");
		}
	}, [loggedIn, router]);

	const handleAddProduct = () => {
		const product = { name: "test", id: "5", price: 5 }; // Define the new product
		dispatch(addProduct(product)); // Dispatch the addProduct action with the new product
	};

	return (
		<div className="Products">
			<CelebrationAnimation />
			<Navbar />
			<div className="container">
				{/* <Button onClick={() => handleAddProduct()}>Add product</Button> */}
			</div>
		</div>
	);
};

export default Products;
