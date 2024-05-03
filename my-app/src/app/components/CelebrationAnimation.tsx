"use client";
import { useState } from "react";
import Lottie from "react-lottie";
import startAnimation from "../lotties/Animation - 1714418201294.json";
const CelebrationAnimation = () => {
	const [isStopped, setIsStopped] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const onAnimationComplete = () => {
		setIsStopped(true);
		setIsPaused(true);
	};
	return (
		<div
			className={`CelebrationAnimation position-absolute top-0 left-0 z-3 w-100 d-flex justify-content-center ${
				isStopped ? "d-none" : ""
			}`}
		>
			<Lottie
				options={{
					loop: false,
					autoplay: true,
					animationData: startAnimation,
					rendererSettings: {
						preserveAspectRatio: "xMidYMid slice",
					},
				}}
				height={700}
				width={1000}
				isStopped={isStopped}
				isPaused={isPaused}
				eventListeners={[
					{
						eventName: "complete",
						callback: onAnimationComplete,
					},
				]}
			/>
		</div>
	);
};

export default CelebrationAnimation;
