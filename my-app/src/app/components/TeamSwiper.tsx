"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

const TeamSwiper = () => {
	const teamImgs = [
		{ url: "/assets/team_imgs/Marwan.jpg", name: "Marwan Mohamed" },
		{ url: "/assets/team_imgs/Shawqy_Hussien.jpg", name: "Shawqy Hussien" },
		{ url: "/assets/team_imgs/Manar_Mostafa.jpg", name: "Manar Mostafa" },
		{ url: "/assets/team_imgs/Marwan.jpg", name: "Marwan Mohamed" },
		{ url: "/assets/team_imgs/Nada.jpg", name: "Nada Essam" },
	];
	return (
		<section className="TeamSwiper py-5">
			<div className="container">
				<h1 className="mb-3">Our Team</h1>
				<Swiper
					navigation
					freeMode={true}
					pagination={{
						clickable: true,
					}}
					modules={[FreeMode, Pagination]}
					spaceBetween={15}
					slidesPerView={3}
				>
					{teamImgs.map((img, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="imageContainer position-relative">
									<Image
										src={`${img.url}`}
										width={416}
										height={416}
										alt="img"
										className="img-fluid w-100"
									/>
									<div className="nameHolder position-absolute w-100 text-center p-3">
										<h3>{img.name}</h3>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default TeamSwiper;
