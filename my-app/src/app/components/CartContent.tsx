"use client";
import {
	AppBar,
	Avatar,
	Button,
	Dialog,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Toolbar,
	Tooltip,
	Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import {
	clearCart,
	deleteProduct,
	editQuantity,
	handleOpenCloseCart,
} from "../lib/features/products/cartSlice";
import EmptyCartAnimation from "./EmptyCartAnimation";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

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

	const handleDeleteProduct = (p: any) => {
		dispatch(deleteProduct(p));
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
				<div className="container py-3">
					{productsInCart.length === 0 ? (
						<EmptyCartAnimation />
					) : (
						<List>
							{productsInCart.map((product) => {
								return (
									<>
										<ListItem
											className="row my-4"
											key={product.productDetails.id}
										>
											<ListItemAvatar className="me-5 col-1">
												<Image
													alt="Img image"
													src={product.productDetails.image}
													width={100}
													height={100}
												/>
											</ListItemAvatar>
											<div className="col d-flex justify-content-start align-items-start flex-column">
												<div className="d-flex justify-content-between align-items-center w-100 mb-3">
													<h6 className="productTitle">
														{product.productDetails.title}
													</h6>
													<h6 className="productQuantity">
														<span className="text-black-50">Quantity </span>
														<span className="border px-4">
															{product.quantity}
														</span>
													</h6>
													<h6 className="productPrice">
														<span className="text-black-50">For One </span>
														<span className="border px-4">
															{product.productDetails.price}
														</span>
													</h6>
													<h6 className="productTotalPrice">
														<span className="text-black-50">Total </span>
														<span className="border px-4 me-1">
															{Math.round(
																product.productDetails.price * product.quantity
															)}
														</span>
														EGP
													</h6>
												</div>
												<div className="d-flex justify-content-between align-items-center w-100">
													<div>
														<Tooltip title="Add">
															<IconButton
																aria-label="add"
																size="small"
																className="green-bg me-4"
																onClick={() =>
																	dispatch(
																		editQuantity({
																			productId: product.productDetails.id,
																			quantity: product.quantity + 1,
																		})
																	)
																}
															>
																<AddIcon fontSize="inherit" />
															</IconButton>
														</Tooltip>
														<Tooltip title="Remove">
															<IconButton
																aria-label="remove"
																size="small"
																className="red-bg"
																onClick={() =>
																	product.quantity > 0 &&
																	dispatch(
																		editQuantity({
																			productId: product.productDetails.id,
																			quantity: product.quantity - 1,
																		})
																	)
																}
															>
																<RemoveRoundedIcon fontSize="inherit" />
															</IconButton>
														</Tooltip>
													</div>
													<Tooltip title="Delete">
														<IconButton
															aria-label="delete"
															size="medium"
															onClick={() => handleDeleteProduct(product)}
														>
															<CloseIcon fontSize="inherit" />
														</IconButton>
													</Tooltip>
												</div>
											</div>
										</ListItem>
										<Divider />
									</>
								);
							})}
						</List>
					)}
					{productsInCart.length !== 0 && (
						<>
							<Button variant="contained" className="green-bg me-3">
								Checkout
							</Button>
							<Button
								variant="contained"
								className="red-bg"
								onClick={() => dispatch(clearCart())}
							>
								Clear Cart
							</Button>
						</>
					)}
				</div>
			</Dialog>
		</div>
	);
};

export default CartContent;
