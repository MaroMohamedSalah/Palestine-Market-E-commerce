"use client";

import { useState } from "react";
import { useAppSelector } from "../lib/hooks";
import { Badge, Drawer, IconButton } from "@mui/material";

const Cart = () => {
	const [openCart, setOpenCart] = useState(false);
	const cartProducts = useAppSelector(
		(state) => state.rootReducer.cart.products
	);
	const handleOpenCart = () => {
		setOpenCart(!openCart);
	};
	return (
		<div className="Cart">
			<IconButton
				onClick={handleOpenCart}
				aria-label="cart"
				className="white-color me-3"
				size="medium"
			>
				<Badge badgeContent={cartProducts.length}>
					{/* <LocalMallIcon /> */}
					🍉
				</Badge>
			</IconButton>
			<Drawer open={openCart} onClose={handleOpenCart} anchor="right"></Drawer>
		</div>
	);
};

export default Cart;
