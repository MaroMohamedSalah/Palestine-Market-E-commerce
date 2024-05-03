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
import { forwardRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { handleOpenCloseCart } from "../lib/features/products/cartSlice";

const CartContent = () => {
	const isCartOpen = useAppSelector(
		(state) => state.rootReducer.cart.isCartOpen
	);
	const dispatch = useAppDispatch();

	const handleOpenCart = () => {
		dispatch(handleOpenCloseCart());
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
							Sound
						</Typography>
						<Button autoFocus color="inherit" onClick={handleOpenCart}>
							save
						</Button>
					</Toolbar>
				</AppBar>
				<List>
					<ListItemButton>
						<ListItemText primary="Phone ringtone" secondary="Titania" />
					</ListItemButton>
					<Divider />
					<ListItemButton>
						<ListItemText
							primary="Default notification ringtone"
							secondary="Tethys"
						/>
					</ListItemButton>
				</List>
			</Dialog>
		</div>
	);
};

export default CartContent;
