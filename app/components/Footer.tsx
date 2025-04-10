import React from "react";

const Footer = () => {
	return (
		<footer className="bg-black-c text-white-c flex flex-col items-center">
			<section className="bg-peach-c max-w-[85%] flex items-center flex-col justify-center text-center gap-5 px-5 py-14 rounded-2xl min-h-[380px] ">
				<h2 className="text-3xl font-bold">Let's talk about your project</h2>
				<p className="text-sm">
					Ready to take it to the new level? Contact us today and find out how
					our expertise can help your business grow.
				</p>
				<button className="bg-white-c rounded-lg h-[56px] w-[150px] text-darkGray-c">GET IN TOUCH</button>
			</section>
		</footer>
	);
};

export default Footer;
