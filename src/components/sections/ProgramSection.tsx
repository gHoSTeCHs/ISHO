import React from 'react';
import Button from '../ui/Button';
import { images } from '../../constants';

const ProgramsSection: React.FC = () => {
	return (
		<section className="py-12 px-6 bg-white">
			<div className="container mx-auto">
				<p className="text-coral-500 font-medium">Our Our Upcoming Events</p>

				<div className="mt-8">
					<p className="text-gray-700">
						We provide medical, social support, psychological counseling,{' '}
						<span className="text-coral-500">scholarships, finances,</span>
						so that no one on earth has to worry about an exclusion from
						healthcare.
					</p>

					<Button variant="secondary" className="mt-6">
						Explore More
					</Button>
				</div>

				<img src={images.comingSoon} alt="Coming soon gif" />

				{/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					<div className="bg-white rounded-lg shadow p-4">
						<div className="flex">
							<img
								src="https://placehold.co/100x100"
								alt="Children program"
								className="w-16 h-16 object-cover rounded"
							/>
							<div className="ml-4">
								<h4 className="font-semibold">
									Children and Proactive They are the Future of the World
								</h4>
								<p className="text-xs text-gray-500 mt-2">June 8, 2023</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-4">
						<div className="flex">
							<img
								src="https://placehold.co/100x100"
								alt="Science program"
								className="w-16 h-16 object-cover rounded"
							/>
							<div className="ml-4">
								<h4 className="font-semibold">
									Scientific All About Power Generation in Ocean Power
								</h4>
								<p className="text-xs text-gray-500 mt-2">March 14, 2023</p>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-lg shadow p-4">
						<div className="flex">
							<img
								src="https://placehold.co/100x100"
								alt="Children program"
								className="w-16 h-16 object-cover rounded"
							/>
							<div className="ml-4">
								<h4 className="font-semibold">
									Children and Proactive They are the Future of the World
								</h4>
								<p className="text-xs text-gray-500 mt-2">April 22, 2023</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default ProgramsSection;
