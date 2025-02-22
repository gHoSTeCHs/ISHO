import React from 'react';
import { images } from '../../constants';

const FoundationActivities: React.FC = () => {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<div className="container mx-auto">
				<p className="text-coral-500 font-bold text-2xl">
					Organisation Previous Activities
				</p>
				<p className="mt-6 max-w-3xl">
					The Imo Self Help Organisation has been active in more than 5 states
					across eastern Nigeria, trying to improve the lives of the people in
					any way we can.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					<div className="relative ">
						<img
							src={images.scan6}
							alt="Foundation award distribution program"
							className="w-full h-64 object-cover rounded-2xl overflow-hidden"
						/>

						<div className="mt-4">
							<p className="text-gray-600 text-base font-medium">
								Training and providing adequate knowledge and assitance in food
								processing, and production.
							</p>
						</div>
					</div>

					<div className="relative">
						<img
							src={images.scan4}
							alt="Volunteer activities"
							className="w-full h-64 object-cover rounded-lg"
						/>
						<div className="mt-4">
							<p className="text-gray-600 text-base font-medium">
								Funding Micro Credits to Primary Groups in Ideato, Mbais and
								Okigwe dioceses in Imo State, Nigeria.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoundationActivities;
