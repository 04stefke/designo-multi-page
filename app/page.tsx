export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center w-full gap-36">
			<section className="bg-peach-c text-white flex flex-col items-center lg:flex-row lg:justify-between gap-10 homePage-bg-image md:rounded-2xl max-lg:pt-20 h-[650px] md:max-w-[90%] lg:pl-10 lg:pb-20  overflow-hidden">
				<div className=" flex flex-col items-center lg:items-start justify-center max-lg:text-center gap-5 max-w-[90%] md:max-w-[70%] xl:pl-32">
					<h2 className="text-2xl md:text-3xl xl:text-4xl font-bold">
						Award-winning custom designs and digital branding solutions
					</h2>
					<p className="text-sm xl:text-base">
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
						className="absolute bottom-[-400px] xs:bottom-[-450px] 2xs:bottom-[-600px] 3xs:bottom-[-750px] sm:bottom-[-800px] md:bottom-[-800px] lg:bottom-[-400px] xxl:bottom-[-500px] transition-all duration-700 ease-in-out"
					/>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center gap-10">
				<article className="">
					<h2>WEB DESIGN</h2>
					<p>VIEW PROJECTS</p>
				</article>
				<article className="">
					<h2>APP DESIGN</h2>
					<p>VIEW PROJECTS</p>
				</article>
				<article className="">
					<h2>GRAPHIC DESIGN</h2>
					<p>VIEW PROJECTS</p>
				</article>
			</section>
		</main>
	);
}
