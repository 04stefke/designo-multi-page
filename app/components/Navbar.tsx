"use client"
import React, { useState } from "react";

const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	return (
		<header className="px-5 py-10 flex items-center justify-between ">
			<img src="assets/shared/desktop/logo-dark.png" alt="" className="w-44" />
			<nav>
				<ul className="hidden xl:flex items-center gap-5">
					<li className="p-3">a</li>
					<li className="p-3">a</li>
					<li className="p-3">a</li>
				</ul>
				<img
					src={`${dropdown ? 'assets/shared/mobile/icon-close.svg' : 'assets/shared/mobile/icon-hamburger.svg'}`}
					alt=""
					className="block xl:hidden"
					onClick={() => setDropdown(!dropdown)}
				/>
				<div
					className={`absolute xl:hidden top-24 left-0 w-full flex flex-col items-center gap-6 transform transition-transform ${
						dropdown ? "opacity-100" : "opacity-0"
					}`}
					style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
				>
					<li className=" list-none p-3">a</li>
					<li className=" list-none p-3">a</li>
					<li className=" list-none p-3">a</li>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
