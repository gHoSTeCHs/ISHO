import React, { useState } from 'react';
// import Logo from './Logo';

const Navbar: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white py-4 px-6 md:px-12 shadow-sm">
			<div className="container mx-auto flex justify-between items-center">
				{/* <Logo /> */}

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					<a href="#" className="text-gray-800 hover:text-gray-600">
						Home
					</a>
					<a href="#" className="text-gray-800 hover:text-gray-600">
						Portfolio
					</a>
					<a href="#" className="text-gray-800 hover:text-gray-600">
						Pages
					</a>
					<a href="#" className="text-gray-800 hover:text-gray-600">
						About Us
					</a>
					<a href="#" className="text-gray-800 hover:text-gray-600">
						Contact
					</a>
				</nav>

				{/* CTA Button */}
				<button
					className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md"
					type="button">
					Donate
				</button>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-gray-800"
					type="button"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<nav className="md:hidden bg-white py-4 px-6">
					<div className="flex flex-col space-y-3">
						<a href="#" className="text-gray-800 hover:text-gray-600">
							Home
						</a>
						<a href="#" className="text-gray-800 hover:text-gray-600">
							Portfolio
						</a>
						<a href="#" className="text-gray-800 hover:text-gray-600">
							Pages
						</a>
						<a href="#" className="text-gray-800 hover:text-gray-600">
							About Us
						</a>
						<a href="#" className="text-gray-800 hover:text-gray-600">
							Contact
						</a>
						<button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md w-full">
							Donate
						</button>
					</div>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
