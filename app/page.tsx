export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center">
			<section className="bg-peach-c text-white flex flex-col items-center lg:justify-between gap-10 homePage-bg-image pt-20 max-lg:h-[650px] md:w-[90%] overflow-hidden">
				<div className=" flex flex-col items-center justify-center text-center gap-5 max-w-[90%]">
					<h2 className="text-2xl font-bold">
						Award-winning custom designs and digital branding solutions
					</h2>
					<p className="text-sm">
						With over 10 years in the industry, we are experienced in creating
						fully responsive websites, app design, and engaging brand
						experiences. Find out more about our services.
					</p>
					<button className="bg-white-c rounded-lg h-[56px] w-[150px] text-darkGray-c cursor-pointer hover:brightness-75">
						LEARN MORE
					</button>
				</div>
				<div className="relative w-full flex justify-center">
					<img
						src="assets/home/desktop/image-hero-phone.png"
						alt="phone image"
						className="max-lg:absolute bottom-[-400px] xs:bottom-[-500px] 2xs:bottom-[-600px] 3xs:bottom-[-750px] sm:bottom-[-800px] md:bottom-[-800px] transition-all duration-700 ease-in-out"
					/>
				</div>
			</section>
		</main>
	);
}
