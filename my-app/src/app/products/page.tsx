"use client";

import { useEffect, useState } from "react";
import CelebrationAnimation from "../components/CelebrationAnimation";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import "./products.css";
import { initProducts } from "../lib/features/products/productsSlice";
import ProductsList from "./ProductsList";
import CartContent from "../components/CartContent";
import CategorySelect from "./CategorySelect";

const Products = () => {
	const dispatch = useAppDispatch();
	const userToken = useAppSelector((state) => state.rootReducer.user.token);
	const router = useRouter();

	const [selectedCategory, setSelectedCategory] = useState(null);
	useEffect(() => {
		if (!userToken) {
			router.push("/login");
		}
	}, [userToken, router]);

	useEffect(() => {
		fetchProducts();
	}, []);

	// const fetchProducts = () => {
	// 	fetch("https://fakestoreapi.com/products")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			dispatch(initProducts(data));
	// 		})
	// 		.catch((error) => console.error(error));
	// };
	const fetchProducts = () => {
		fetch("http://localhost:8009/products")
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
				<CategorySelect
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<ProductsList category={selectedCategory} />
			</div>
			<CartContent />
		</div>
	);
};

export default Products;
