"use client";
import "./cart.css";
import { forwardRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
	AppBar,
	Badge,
	Button,
	Dialog,
	Drawer,
	IconButton,
	Toolbar,
	Tooltip,
} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { handleOpenCloseCart } from "../lib/features/cart/cartSlice";

const Cart = () => {
	const dispatch = useAppDispatch();
	const cartProducts = useAppSelector(
		(state) => state.rootReducer.cart.products
	);
	const handleOpenCart = () => {
		dispatch(handleOpenCloseCart());
	};

	return (
		<div className="Cart">
			<Tooltip title="Cart">
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
			</Tooltip>
			{/* <Drawer
				className="cartDrawer"
				open={openCart}
				onClose={handleOpenCart}
				anchor="right"
			>

			</Drawer> */}
		</div>
	);
};

export default Cart;
