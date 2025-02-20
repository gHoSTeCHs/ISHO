import React from 'react';

const FoundationActivities: React.FC = () => {
	return (
		<section className="py-16 px-6 bg-gray-50">
			<div className="container mx-auto">
				<p className="text-coral-500 font-medium">Foundation Activities</p>
				<p className="mt-6 max-w-3xl">
					The Imo Self Help Organisation{' '}
					<span className="text-coral-500">Foundations</span> are active in more
					than 120 countries around the world, using grant-giving, research,
					advocacy, impact investment.
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
								Xurio foundation award collection program progress...
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
								Volunteer activities with local communities...
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoundationActivities;
