import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import TeamSwiper from "./components/TeamSwiper";

export default function Home() {
	return (
		<main className="landingPage">
			<AppBar position="fixed" className="nav green-bg">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Palestine Market E-commerce
					</Typography>
					<Link href={"#"}>
						<Button color="inherit">Login</Button>
					</Link>
				</Toolbar>
			</AppBar>
			<div className="mt-5 pt-5">
				<HeroSection />
			</div>
			<div className="landingVideo">
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
				<h1>قــــــــاطِع</h1>
				<h1>Boycott!</h1>
			</div>
			<TeamSwiper />
		</main>
	);
}
