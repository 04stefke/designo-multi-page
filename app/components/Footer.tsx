import React from "react";

const Footer = () => {
	return (
		<footer className="bg-black-c text-white-c flex flex-col items-center gap-10 pb-15 md:pb-24 relative ">
			<section className="absolute top-[-100px] md:top-[-200px] bg-peach-c bg-[url('/assets/shared/desktop/bg-pattern-call-to-action.svg')] bg-center bg-no-repeat w-[90%] lg:w-[80%] 2xl:w-[65%] px-5 py-14 lg:px-14 lg:py-20 rounded-2xl  ">
				<div className="flex items-center flex-col lg:flex-row justify-between  gap-5 ">
					<div className="flex flex-col items-center lg:items-start justify-center gap-5 lg:max-w-[500px] text-center md:text-start">
						<h2 className="text-3xl lg:text-4xl font-bold">
							Let's talk about your project
						</h2>
						<p className="text-sm lg:text-base ">
							Ready to take it to the new level? Contact us today and find out
							how our expertise can help your business grow.
						</p>
					</div>

					<button className="bg-white-c rounded-lg h-[56px] w-[150px] text-darkGray-c cursor-pointer hover:brightness-75">
						GET IN TOUCH
					</button>
				</div>
			</section>
			<section className="flex flex-col md:flex-row items-center  justify-center md:justify-between gap-5  lg:w-[80%] 2xl:w-[65%] w-[90%] pt-72 md:pt-32">
				<img
					src="assets/shared/desktop/logo-light.png"
					alt=""
					className="w-52"
				/>
				<hr className="md:hidden border-[1px] border-darkGray-c w-[90%]" />
				<ul className="text-center md:flex items-center gap-5 justify-center">
					<li className="uppercase py-3 cursor-pointer hover:brightness-75">
						Our Company
					</li>
					<li className="uppercase py-3 cursor-pointer hover:brightness-75">
						Locations
					</li>
					<li className="uppercase py-3 cursor-pointer hover:brightness-75">
						Contact
					</li>
				</ul>
			</section>
			<hr className="hidden md:block border-[1px] border-darkGray-c w-[90%] lg:w-[80%] 2xl:w-[65%]" />
			<section className="flex flex-col items-center justify-center md:justify-between w-[90%] lg:w-[80%] 2xl:w-[65%] gap-10 md:flex-row">
				<section className="text-center md:text-start">
					<h3 className="font-bold">Designo Central Office</h3>
					<p className="text-sm">
						3886 Wellington Street
						<br />
						Toronto, Ontario M9C 3J5
					</p>
				</section>
				<section className="text-center md:text-start">
					<h3 className="font-bold">Contact Us (Central Office)</h3>
					<p className="text-sm">
						P: +1 253-863-8967
						<br />
						M: contact@designo.co
					</p>
				</section>
				<section className="flex items-center gap-5 flex-wrap justify-center md:self-end xl:ml-40 2xl:ml-60">
					<img
						src="assets/shared/desktop/icon-facebook.svg"
						alt="facebook icon"
						className="cursor-pointer hover:brightness-150"
					/>
					<img
						src="assets/shared/desktop/icon-youtube.svg"
						alt="youtube icon"
						className="cursor-pointer hover:brightness-150"
					/>
					<img
						src="assets/shared/desktop/icon-twitter.svg"
						alt="twitter icon"
						className="cursor-pointer hover:brightness-150"
					/>
					<img
						src="assets/shared/desktop/icon-pinterest.svg"
						alt="pinterest icon"
						className="cursor-pointer hover:brightness-150"
					/>
					<img
						src="assets/shared/desktop/icon-instagram.svg"
						alt="instagram icon"
						className="cursor-pointer hover:brightness-150"
					/>
				</section>
			</section>
		</footer>
	);
};

export default Footer;
