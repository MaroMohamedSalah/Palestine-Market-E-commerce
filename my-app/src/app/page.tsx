import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";

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
		</main>
	);
}
