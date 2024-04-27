import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface SideCollectionTextProps {
	title: string;
	subTitle: string;
	p: string;
	animationDelay: number;
}

const SideCollectionText: React.FC<SideCollectionTextProps> = ({
	title,
	subTitle,
	p,
	animationDelay,
}) => {
	return (
		<div
			className="SideCollectionText"
			data-aos="fade-up"
			data-aos-duration="700"
			data-aos-delay={`${animationDelay}`}
		>
			<h1>{title}</h1>
			<h3 className="fw-normal">{subTitle}</h3>
			<p>{p}</p>
			<div className="d-flex">
				<Link href={"#"}>
					<Button className="green-color">Register</Button>
				</Link>
			</div>
		</div>
	);
};

export default SideCollectionText;
