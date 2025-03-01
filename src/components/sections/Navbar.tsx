import React, { useState } from 'react';
import { images } from '../../constants';

const Navbar: React.FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white py-4 px-6 md:px-12 shadow-sm">
			<div className="container mx-auto flex justify-between items-center">
				<img src={images.logo} alt="Logo" className="h-12 w-12" />

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					<a href="#" className="text-gray-800 hover:text-gray-600">
						Home
					</a>

					<a href="#about" className="text-gray-800 hover:text-gray-600">
						About Us
					</a>
					<a href="#contact" className="text-gray-800 hover:text-gray-600">
						Contact
					</a>
				</nav>

				{/* CTA Button */}
				<a href="#donation">
					<button
						className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white px-5 py-2 rounded-md"
						type="button">
						Donate
					</button>
				</a>

				{/* Mobile Menu Button */}

				<button
					title="button"
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
						<a href="#about" className="text-gray-800 hover:text-gray-600">
							About Us
						</a>
						<a href="#contact" className="text-gray-800 hover:text-gray-600">
							Contact
						</a>
						<a href="#donation">
							<button
								className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md w-full"
								type="button">
								Donate
							</button>
						</a>
					</div>
				</nav>
			)}
		</header>
	);
};

export default Navbar;
