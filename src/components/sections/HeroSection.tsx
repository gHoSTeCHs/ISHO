import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
	return (
		<section className="bg-gray-50 py-12 px-6 md:py-16">
			<div className="container mx-auto">
				<div className="max-w-3xl">
					<h1 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
						Make Opportunity Universal <span className="text-coral-500">&</span>{' '}
						Sustainable
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

					<Button variant="secondary" size="md">
						Donate Now
					</Button>
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
							<p className="text-coral-500 font-medium">Who We Are</p>
							<p className="mt-4 text-gray-700">
								Every year, the{' '}
								<span className="text-coral-500 font-medium">
									Open Society Foundations
								</span>{' '}
								give grants to a diverse array of groups and individuals who
								promote our vision of a more equitable world. That is guided by
								their values and global expertise.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
