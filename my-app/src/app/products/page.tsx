"use client";

import { useEffect, useState } from "react";
import CelebrationAnimation from "../components/CelebrationAnimation";
import Navbar from "../components/Navbar";
import { isLoggedIn } from "../services/authService";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { useAppDispatch } from "../lib/hooks";
import "./products.css";
import {
	addProduct,
	initProducts,
} from "../lib/features/products/productsSlice";
import ProductsList from "./ProductsList";

const Products = () => {
	const dispatch = useAppDispatch();
	const loggedIn = isLoggedIn();
	const router = useRouter();
	useEffect(() => {
		if (!loggedIn) {
			router.push("/login");
		}
	}, [loggedIn, router]);

	useEffect(() => {
		handleFetchProducts();
	}, []);

	const handleFetchProducts = () => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				dispatch(initProducts(data));
			})
			.catch((error) => console.error(error));
	};

	return (
		<div className="Products">
			<CelebrationAnimation />
			<Navbar />
			<div className="container">
				<ProductsList category="women's clothing" />
			</div>
		</div>
	);
};

export default Products;
