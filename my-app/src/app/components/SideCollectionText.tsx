import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

interface SideCollectionTextProps {
	title: string;
	subTitle: string;
	p: string;
}

const SideCollectionText: React.FC<SideCollectionTextProps> = ({
	title,
	subTitle,
	p,
}) => {
	return (
		<div className="SideCollectionText">
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
