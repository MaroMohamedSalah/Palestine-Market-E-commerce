"use client";
import {
	AppBar,
	Button,
	Dialog,
	Divider,
	IconButton,
	List,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { handleOpenCloseCart } from "../lib/features/products/cartSlice";
import EmptyCartAnimation from "./EmptyCartAnimation";

const CartContent = () => {
	const isCartOpen = useAppSelector(
		(state) => state.rootReducer.cart.isCartOpen
	);
	const productsInCart = useAppSelector(
		(state) => state.rootReducer.cart.products
	);
	const dispatch = useAppDispatch();

	const handleOpenCart = () => {
		dispatch(handleOpenCloseCart());
	};

	const getTotalCartPrice = () => {
		let total = 0;
		productsInCart.forEach((p) => {
			total += p.quantity * p.productDetails.price;
		});
		return Math.round(total);
	};

	const Transition = forwardRef(function Transition(
		props: TransitionProps & {
			children: React.ReactElement;
		},
		ref: React.Ref<unknown>
	) {
		return <Slide direction="up" ref={ref} {...props} />;
	});
	return (
		<div>
			<Dialog
				fullScreen
				className={`CartContent ${isCartOpen ? "" : "z-n1"}`}
				open={isCartOpen}
				onClose={handleOpenCart}
				TransitionComponent={Transition}
			>
				<AppBar sx={{ position: "relative" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleOpenCart}
							aria-label="close"
						>
							<CloseIcon />
						</IconButton>
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							<span className="me-3">Your Cart 🍉</span>
							{productsInCart.length !== 0 && (
								<span className="text-black-50 fw-bold">
									Items: {productsInCart.length}
								</span>
							)}
						</Typography>
						<Typography variant="h6" component="div">
							{productsInCart.length !== 0 ? (
								`Total: ${getTotalCartPrice()} EGP`
							) : (
								<Button
									className="black-color fw-bold"
									onClick={() => handleOpenCart()}
								>
									continue shopping
								</Button>
							)}
						</Typography>
					</Toolbar>
				</AppBar>
				<div className="container">
					{productsInCart.length === 0 ? <EmptyCartAnimation /> : <List></List>}
				</div>
			</Dialog>
		</div>
	);
};

export default CartContent;
