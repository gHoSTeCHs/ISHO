import React from 'react';

const MissionSection: React.FC = () => {
	return (
		<section className="bg-navy-900  py-12 px-6">
			<div className="container mx-auto">
				<div className="mb-8">
					<p className="font-medium">Who We Work</p>
					<p className="mt-6 max-w-3xl">
						The Imo Self Help <span className="">Foundations</span> are active
						in more than 120 countries around the world, using grant-giving,
						research, advocacy, impact investment, and strategic litigation to
						support the development of inclusive and vibrant democracies.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					<div className="relative">
						<img
							src="https://placehold.co/500x350"
							alt="Water and sanitation program"
							className="w-full h-64 object-cover rounded-lg"
						/>
						<div className="absolute bottom-4 left-4 bg-teal-500 text-white text-xs px-3 py-1 rounded">
							Water and Sanitation
						</div>
					</div>

					<div className="relative">
						<img
							src="https://placehold.co/500x350"
							alt="World Health Foundation"
							className="w-full h-64 object-cover rounded-lg"
						/>
						<div className="absolute bottom-4 left-4 bg-coral-500 text-white text-xs px-3 py-1 rounded">
							World Health Foundation
						</div>
					</div>
				</div>

				<div className="flex justify-center mt-8">
					<div className="flex space-x-2">
						<button className="w-2 h-2 rounded-full bg-white opacity-50">
							Test
						</button>
						<button className="w-2 h-2 rounded-full bg-white">Test</button>
						<button className="w-2 h-2 rounded-full bg-white opacity-50">
							Test
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionSection;
