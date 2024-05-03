"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import cartAnimation from "../lotties/Animation - cart empty.json";
const EmptyCartAnimation = () => {
	return (
		<div>
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: cartAnimation,
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice",
					},
				}}
				height={500}
				width={500}
			/>
			<h4 className="text-center pt-3">Your Cart is Empty 🥲</h4>
		</div>
	);
};

export default EmptyCartAnimation;
