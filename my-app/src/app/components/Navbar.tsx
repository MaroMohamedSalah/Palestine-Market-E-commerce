"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FlagAnimation from "./FlagAnimation";
import { Badge, Drawer } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useAppSelector, useAppStore } from "../lib/hooks";

const pages = [];
const settings = ["Profile", "Issues", "Orders", "Logout"];

const Navbar = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const [openCart, setOpenCart] = useState(false);
	const cartProducts = useAppSelector((state) => state.rootReducer.products);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleOpenCart = () => {
		setOpenCart(!openCart);
	};
	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<div className="me-3">
						<FlagAnimation />
					</div>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Palestine Market E-commerce
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

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

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Drawer
						open={openCart}
						onClose={handleOpenCart}
						anchor="right"
					></Drawer>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
