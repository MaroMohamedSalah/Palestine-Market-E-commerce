"use client";

import { useEffect, useState } from "react";
import CelebrationAnimation from "../components/CelebrationAnimation";
import Navbar from "../components/Navbar";
import { isLoggedIn } from "../services/authService";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../lib/hooks";
import "./products.css";
import { initProducts } from "../lib/features/products/productsSlice";
// import CategorySwitch from "./CategorySwitch";
import ProductsList from "./ProductsList";
import CartContent from "../components/CartContent";

const Products = () => {
	const dispatch = useAppDispatch();
	const loggedIn = isLoggedIn();
	const router = useRouter();

	const [selectedCategory, setSelectedCategory] = useState(null);
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
				{/* <CategorySwitch
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/> */}
				<ProductsList category={selectedCategory} />
			</div>
			<CartContent />
		</div>
	);
};

export default Products;
