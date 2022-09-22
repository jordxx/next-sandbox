import Link from "next/link";
import React from "react";

function Header() {
	return (
		<>
			<header className="flex justify-between p-5 font-sans max-w-7xl mx-auto text-lg">
				<div className="flex items-center space-x-5">
					<Link href="/">
						<img
							src="https://lovecare.id/_next/image?url=%2Fassets%2Flogo.png&w=384&q=75"
							alt="lovecarelogo"
							className="w-44 object-contain cursor-pointer"
						/>
					</Link>

					<div className="mt-3 text-black cursor-pointer hidden md:inline-flex items-center space-x-5">
						<h3>Home</h3>
						<h3>About</h3>
					</div>
				</div>

				<div className="mt-3 flex items-center space-x-5 text-green-600">
					<h3 className="border px-4 py-1 rounded-full border-black">
						Contact Us
					</h3>
				</div>
			</header>
		</>
	);
}

export default Header;
