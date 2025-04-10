import React from "react";

const Navbar = () => {
	return (
		<header className="px-5 py-10 flex items-center justify-between ">
			<img src="assets/shared/desktop/logo-dark.png" alt="" className="w-44" />
			<nav>
				<ul className="hidden xl:flex items-center gap-5">
					<li className="p-3">a</li>
					<li className="p-3">a</li>
					<li className="p-3">a</li>
				</ul>
				<img src="assets/shared/mobile/icon-hamburger.svg" alt="" className="block xl:hidden" />
			</nav>
		</header>
	);
};

export default Navbar;
