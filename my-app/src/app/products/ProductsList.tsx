"use client";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import Image from "next/image";
import { Button, Rating } from "@mui/material";
import { addProductToCart } from "../lib/features/products/cartSlice";
interface ProductsListProps {
	category?: string | null;
}

const ProductsList: React.FC<ProductsListProps> = ({ category }) => {
	const Products = useAppSelector((state) => state.rootReducer.products);
	const filteredProducts =
		category === null || category === "all"
			? Products
			: Products.filter((p) => p.category === category);
	const dispatch = useAppDispatch();

	const handleAddProductToCart = (productId: number) => {
		dispatch(addProductToCart({ productId: productId, quantity: 1 }));
	};

	return (
		<div className="ProductsList py-3">
			<div className="row">
				{filteredProducts.map((p) => (
					<div
						className="product col-md-4 col-12 d-flex justify-content-center align-items-center flex-column"
						key={p.id}
					>
						<div className="productImg d-flex align-items-center justify-content-center">
							<Image
								src={p.image}
								alt="Product img"
								width={100}
								height={100}
								className="img-fluid"
							/>
						</div>
						<h5 className="title text-center pt-3 m-0">{p.title}</h5>
						<p className="description text-center text-white-50 py-2 m-0">
							{p.description.slice(0, 75)} ...
						</p>
						<div className="rating d-flex justify-content-start align-items-center">
							<h5 className="rate mb-0 me-2 green-color fw-bold">Rate</h5>
							<Rating name="read-only" value={p.rating.rate} readOnly />
							<h6 className="count ps-2 mb-0 text-white-50">
								({p.rating.count})
							</h6>
						</div>
						<Button
							variant="contained"
							size="small"
							className="my-3 green-bg"
							onClick={() => handleAddProductToCart(p.id)}
						>
							Add to cart
						</Button>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsList;
