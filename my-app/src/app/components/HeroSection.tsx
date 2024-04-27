import Image from "next/image";
import img from "../assets/img1.jpeg";
import SideCollectionText from "./SideCollectionText";

const HeroSection = () => {
	return (
		<div className="HeroSection pb-5 pt-3">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 image">
						<Image
							src={img}
							width={600}
							height={600}
							alt="img"
							className="rounded img-fluid"
						/>
					</div>
					<div className="col-12 col-md-6 text d-flex justify-content-between flex-column">
						<SideCollectionText
							title="Palestine Market"
							subTitle="Shop Ethically, Support Locally"
							p="Explore ethical products, support Palestinian artisans, and make
								a meaningful impact with every purchase at Palestine Market."
						/>
						<SideCollectionText
							title="Choose Your Path"
							subTitle="Support Palestine, Say No to Boycotts"
							p="Take a stand for Palestine by shopping ethically. Reject boycott products and empower Palestinian artisans with every purchase at Palestine Market."
						/>
						<SideCollectionText
							title="Stand Strong"
							subTitle="Egyptian Students Supporting Palestine"
							p="oin us, Egyptian students standing in solidarity with Palestine. Explore our platform, where every purchase supports Palestinian artisans and their livelihoods."
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
