import React from 'react';
import Button from '../ui/Button';

const ValueSection: React.FC = () => {
	return (
		<section className="bg-navy-900 text-white py-16 px-6 relative overflow-hidden">
			<div className="container mx-auto relative z-10">
				<div className="max-w-2xl">
					<h2 className="text-black text-3xl md:text-4xl font-bold leading-tight">
						Helping Children Never Doubt that They are Valuable & Powerful
					</h2>
					<p className="mt-4 text-gray-300">
						The fight for human dignity never ends, which is why we value
						partners who understand that change happens from the ground up.
					</p>

					<div className="mt-8 flex flex-wrap gap-4">
						<Button variant="secondary">Donate Now</Button>
						<Button
							variant="outline"
							className="bg-transparent text-black hover:bg-black/80 hover:bg-opacity-10">
							Learn More
						</Button>
					</div>
				</div>
			</div>

			{/* Decorative line */}
			<svg
				className="absolute bottom-0 right-0 w-full md:w-1/2 h-32 text-black opacity-10"
				viewBox="0 0 400 100"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M0,50 C100,20 200,80 400,30"
					stroke="currentColor"
					strokeWidth="2"
					fill="none"
				/>
			</svg>
		</section>
	);
};

export default ValueSection;
