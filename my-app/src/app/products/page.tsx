"use client";

import { useEffect, useState } from "react";
import CelebrationAnimation from "../components/CelebrationAnimation";
import Navbar from "../components/Navbar";
import { isLoggedIn } from "../services/authService";
import { useRouter } from "next/navigation";

const Products = () => {
	const loggedIn = isLoggedIn();
	const router = useRouter();
	useEffect(() => {
		if (!loggedIn) {
			router.push("/login");
		}
	}, []);
	return (
		<div className="Products">
			<CelebrationAnimation />
			<Navbar />
			<div className="container"></div>
		</div>
	);
};

export default Products;
