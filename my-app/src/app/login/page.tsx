"use client";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	FilledInput,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	TextField,
} from "@mui/material";
import "./login.css";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};
	return (
		<div className="Login">
			<div className="container d-flex justify-content-center align-items-center min-vh-100">
				<Card
					sx={{ minWidth: 400 }}
					variant="outlined"
					className="bg-dark"
					data-aos="flip-left"
					data-aos-duration="1000"
				>
					<CardContent>
						<h4 className="text-white">Welcome!</h4>
						<h6 className="text-white-50 fw-light">Sign in to continue.</h6>
					</CardContent>
					<CardContent>
						<TextField
							className="d-block mb-3 green-bg"
							fullWidth
							id="username"
							label="Username"
							variant="filled"
						/>

						<FormControl fullWidth variant="filled" className="green-bg mb-3">
							<InputLabel htmlFor="password">Password</InputLabel>
							<FilledInput
								id="password"
								type={showPassword ? "text" : "password"}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
											edge="end"
											className="red-color"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</CardContent>
					<CardActions>
						<Button
							size="large"
							variant="contained"
							fullWidth
							className="red-bg white-color"
						>
							Log in
						</Button>
					</CardActions>
					<CardActions className="d-flex justify-content-center align-items-center my-3">
						<h6 className="text-white-50 mb-0">Don&#39;t have an account?</h6>
						<Button size="small" className="red-color">
							Sign up
						</Button>
					</CardActions>
				</Card>
			</div>
		</div>
	);
};

export default Login;
