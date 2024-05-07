"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FlagAnimation from "./FlagAnimation";
import Cart from "./Cart";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { endSession } from "../lib/features/user/userSlice";

const pages = [];
const settings = ["Profile", "Issues", "Orders", "Logout"];

const Navbar = () => {
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
	const dispatch = useAppDispatch();
	const userToken = useAppSelector((state) => state.rootReducer.user.token);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleLogout = () => {
		fetch("http://localhost:8009/logout/customer", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				token: userToken,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(endSession());
				handleCloseUserMenu();
			})
			.catch((err) => console.error(err));
	};
	return (
		<AppBar position="fixed">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<div className="me-3">
						<FlagAnimation />
					</div>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Palestine Market E-commerce
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

					<Cart />

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt="Marwan" src="/static/images/avatar/2.jpg" />
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
								<MenuItem
									key={setting}
									onClick={
										setting === "Logout" ? handleLogout : handleCloseUserMenu
									}
								>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
