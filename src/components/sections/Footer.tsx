import React from 'react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-navy-900 py-12 px-6">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					<div>
						<Logo />
						<p className="mt-4 text-gray-400 text-sm">
							Our foundation is committed to creating a more equitable and just
							Nigeria through strategic grants and partnerships with community
							organizations.
						</p>
						{/* <div className="flex space-x-4 mt-6">
							<a
								href="#"
								aria-label="Facebook"
								className="text-gray-400 hover:text-white">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
								</svg>
							</a>
							<a
								href="#"
								aria-label="Twitter"
								className="text-gray-400 hover:text-white">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
								</svg>
							</a>
							<a
								href="#"
								aria-label="Instagram"
								className="text-gray-400 hover:text-white">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.88.344-1.857.048-1.054.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058z" />
									<path d="M12 6.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z" />
								</svg>
							</a>
							<a
								href="#"
								aria-label="LinkedIn"
								className="text-gray-400 hover:text-white">
								<svg
									className="w-5 h-5"
									fill="currentColor"
									viewBox="0 0 24 24">
									<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
								</svg>
							</a>
						</div> */}
					</div>

					<div>
						<h4 className="font-semibold mb-4">About Us</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white">
									Our Mission
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Our Team
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* <div>
						<h4 className="font-semibold mb-4">Explore</h4>
						<ul className="space-y-2 text-sm text-gray-400">
							<li>
								<a href="#" className="hover:text-white">
									Our Programs
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									News & Updates
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Events
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									Resources
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-white">
									FAQs
								</a>
							</li>
						</ul>
					</div> */}
				</div>

				<div className="border-t border-gray-800 pt-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="text-sm text-gray-500">
							<p>
								&copy; {currentYear} Imo Self Help Foundation. All rights
								reserved.
							</p>
						</div>
						{/* <div className="text-sm text-gray-500 md:text-right">
							<ul className="flex flex-wrap gap-4 justify-start md:justify-end">
								<li>
									<a href="#" className="hover:text-gray-300">
										Privacy Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Terms of Service
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Cookie Policy
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-gray-300">
										Accessibility
									</a>
								</li>
							</ul>
						</div> */}
					</div>

					<div id="contact" className="my-6">
						4 Contact Address: PLOT 99 IKENEGBU LAYOUT EXTENSION ( 12 WILLIE
						ELEZIEANYA CRESCENT) OWERRI, IMO STATE, NIGERIA, Mobile:
						08033390600, 07081074005, 08064518264
						<br /> Email: info@isho-nigeria.org
					</div>

					<div className=" text-xs text-gray-600 text-center">
						<p>
							The Imo Self Help Organisation work to build vibrant and inclusive
							democracies whose governments are accountable to their citizens.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
