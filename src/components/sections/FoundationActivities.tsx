import React from 'react';

const FoundationActivities: React.FC = () => {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<div className="container mx-auto">
				<p className="text-coral-500 font-medium">
					Organisation Previous Activities
				</p>
				<p className="mt-6 max-w-3xl">
					The Imo Self Help Organisation has been active in more than 5 states
					across eastern Nigeria, trying to improve the lives of the people in
					any way we can.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					<div className="relative">
						<img
							src="https://placehold.co/500x300"
							alt="Foundation award distribution program"
							className="w-full h-64 object-cover rounded-lg"
						/>
						<div className="mt-4">
							<p className="text-sm text-gray-600">
								Establishing a palm plantation, and an oil mill project at
								Obitti in Ohaji/Egbema LGA.
							</p>
						</div>
					</div>

					<div className="relative">
						<img
							src="https://placehold.co/500x300"
							alt="Volunteer activities"
							className="w-full h-64 object-cover rounded-lg"
						/>
						<div className="mt-4">
							<p className="text-sm text-gray-600">
								Esatblished Early Child Care Centers in Imo State through the
								assitance of UNICEF
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoundationActivities;
