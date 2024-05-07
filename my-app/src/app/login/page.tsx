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
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../lib/hooks";
import { startSession } from "../lib/features/user/userSlice";

const Login = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [userName, setUserName] = useState("");
	const [mobile, setMobile] = useState("");
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	const dispatch = useAppDispatch();

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault();
	};

	const handleLogin = () => {
		if (mobile !== "" && password !== "") {
			setLoading(true);
			fetch("http://localhost:8009/login/customer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					mobileId: mobile,
					password: password,
				}),
			})
				.then((res) => {
					// if (res.ok) {
					// 	return res.json();
					// }
					// else {
					// 	return res.text();
					// }
					return res.json();
				})
				.then((data) => {
					if (data.token) {
						dispatch(startSession(data.token));
						setErrorMsg("");
						router.push("/products");
					} else {
						setErrorMsg(data.message);
					}
				})
				.catch((error) => {
					console.error("Error:", error);
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	return (
		<div className="Login">
			<div className="container d-flex justify-content-center align-items-center min-vh-100">
				<Card
					sx={{ width: 400 }}
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
						<h6
							className={`red-color py-3 error opacity-${
								errorMsg ? "100" : "0"
							}`}
						>
							ERROR: {errorMsg}
						</h6>
						<TextField
							className="d-block mb-3 green-bg"
							fullWidth
							id="mobile"
							label="Mobile"
							variant="filled"
							onChange={(e) => {
								setMobile(e.target.value);
							}}
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
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormControl>
					</CardContent>
					<CardActions>
						<LoadingButton
							loading={loading}
							size="large"
							variant="contained"
							fullWidth
							// className="red-bg white-color"
							onClick={() => handleLogin()}
						>
							Log in
						</LoadingButton>
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
