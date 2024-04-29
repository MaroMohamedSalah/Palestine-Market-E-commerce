"use client";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import TeamSwiper from "./components/TeamSwiper";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter();
	useEffect(() => {
		AOS.init(); // Initialize AOS library
	}, []);
	return (
		<main className="landingPage">
			<AppBar position="fixed" className="nav green-bg">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Palestine Market E-commerce
					</Typography>
					<Link href={"/login"}>
						<Button color="inherit">Login</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<div className="mt-5 pt-5">
				<HeroSection />
			</div>
			<div className="landingVideo" data-aos="fade-up" data-aos-duration="700">
				<video
					width="320"
					height="750"
					preload="none"
					autoPlay={true}
					playsInline
					loop
					muted
					className="w-100"
				>
					<source src={"/assets/video1.mp4"} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="vh-100 d-flex justify-content-center align-items-center flex-column finalWords">
				<h1 data-aos="fade-up" data-aos-duration="700">
					قــــــــاطِع
				</h1>
				<h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="300">
					Boycott!
				</h1>
			</div>
			<TeamSwiper />
			<SpeedDial
				ariaLabel="SpeedDial basic example"
				sx={{ position: "absolute", bottom: 16, right: 16 }}
				icon={<SpeedDialIcon />}
				className="position-fixed"
			>
				<SpeedDialAction
					key={"login"}
					icon={<LoginIcon />}
					tooltipTitle={"Login"}
					onClick={() => {
						router.push("/login");
					}}
				/>
				<SpeedDialAction
					key={"register"}
					icon={<PersonAddAltIcon />}
					tooltipTitle={"Register"}
					onClick={() => {
						console.log("test");
					}}
				/>
			</SpeedDial>
		</main>
	);
}
