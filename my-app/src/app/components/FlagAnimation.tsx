import { useState } from "react";
import Lottie from "react-lottie";
import flagAnimation from "../lotties/plastine-flage.json";
const FlagAnimation = () => {
	return (
		<div className="FlagAnimation">
			<Lottie
				options={{
					loop: true,
					autoplay: true,
					animationData: flagAnimation,
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice",
					},
				}}
				height={50}
				width={50}
			/>
		</div>
	);
};

export default FlagAnimation;
