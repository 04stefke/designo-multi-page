"use client";
import React, { useState } from "react";

const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<header className="w-full px-5 py-10 flex items-center justify-between md:max-w-[90%] ">
			<img src="assets/shared/desktop/logo-dark.png" alt="logo" className="w-44" />
			<nav>
				<ul className="hidden md:flex items-center gap-5 uppercase">
					<li className="p-3 lg:cursor-pointer">Our Company</li>
					<li className="p-3 lg:cursor-pointer">Locations</li>
					<li className="p-3 lg:cursor-pointer">Contact</li>
				</ul>
				<img
					src={`${
						dropdown
							? "assets/shared/mobile/icon-close.svg"
							: "assets/shared/mobile/icon-hamburger.svg"
					}`}
					alt=""
					className="block md:hidden"
					onClick={() => setDropdown(!dropdown)}
				/>
				<div
					className={`absolute md:hidden top-24 left-0 pl-5 w-full flex flex-col items-start gap-5 transform transition-transform bg-black-c text-white-c uppercase ${
						dropdown ? "opacity-100" : "opacity-0"
					}`}
					style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
				>
					<li className=" list-none pt-5 ">Our Company</li>
					<li className=" list-none ">Locations</li>
					<li className=" list-none pb-5 ">Contact</li>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
