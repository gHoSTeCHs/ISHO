import React from 'react';

const HeroSection: React.FC = () => {
	return (
		<section className="bg-gray-50 py-12 px-6 md:py-16">
			<div className="container mx-auto">
				<div className="max-w-3xl">
					<h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
						Make South-East Great Again
					</h1>

					<div className="flex flex-wrap gap-4 mt-6 mb-8">
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Funding
						</button>
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Development
						</button>
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Save
						</button>
					</div>
				</div>

				<div className="mt-12 flex flex-col md:flex-row gap-8">
					<div className="md:w-2/3">
						<img
							src="https://placehold.co/800x500"
							alt="Children in need"
							className="w-full h-auto object-cover rounded-lg shadow-md"
						/>
					</div>

					<div className="md:w-1/3 flex flex-col justify-between">
						<div>
							<p className="text-coral-500 font-medium">Our Main Aim</p>
							<p className="mt-4 text-gray-700">
								To alleviate Poverty in the south eastern states of Nigeria,
								through the provision of Microfinance service and capacity
								building/support services in Health, Education, Enterprise
								development and Agriculture to rural poor.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
