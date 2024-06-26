import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

// THIS IS AN AD SLIDE
// AD SLIDER WORKS
// AD SLIDER WAS BASICALLY A COPY PASTE

const AdSlider = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: false,
	};
	const navigate = useNavigate();
	return (
		<div className="mt-8 h-80 w-full bg-dark-3 rounded-xl overflow-hidden">
			<Slider {...settings} className="w-full h-full ">
				<div className="bg-dark-4 h-80 w-full px-12">
					<div className="flex flex-row items-center">
						<div className="w-1/2 flex flex-col gap-4">
							<h2 className="h2-bold">
								Stay up to date with our blog
							</h2>
							<h3 className="text-lg pb-4">
								Read more about the latest updates, skin trading
								news beautiful curated loadouts.
							</h3>
							<Button
								type="button"
								className="shad-button_primary w-52 h-14 rounded-lg flex  flex-row items-center justify-center"
								onClick={() => navigate("/Market")}
							>
								<div className="h3-bold">Visit Blog</div>
							</Button>
						</div>
						<div className="overflow-hidden h-80 flex items-center justify-center w-1/2 scale-125">
							<img src="/assets/images/skin-grid-ad.png" alt="" />
						</div>
					</div>
				</div>
				<div className=""></div>
			</Slider>
		</div>
	);
};
export default AdSlider;
