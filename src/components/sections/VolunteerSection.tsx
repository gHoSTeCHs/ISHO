// File: sections/VolunteerSection.tsx
import React from 'react';

const VolunteerSection: React.FC = () => {
	const volunteers = [
		{
			name: 'Godson C. Echefu',
			role: 'Executive Director',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'Chief G. U. Ejimole',
			role: 'Chairman',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'Mr. Chinedu Egere',
			role: 'Secretary',
			image: 'https://placehold.co/100x100',
		},
	];

	return (
		<section className="py-16 px-6 bg-white">
			<div className="container mx-auto">
				<h2 className="text-2xl font-bold mb-8">Our Key Officers</h2>
				<p className="text-gray-700 max-w-4xl mb-12">
					These are some of the key individuals who make it happen. The have put
					in all the have, to ensure that the future of this organisation is
					remains bright.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{volunteers.map((volunteer, index) => (
						<div key={index} className="bg-white shadow-md rounded-lg p-4">
							<img
								src={volunteer.image}
								alt={volunteer.name}
								className="w-full h-48 object-cover rounded-lg mb-4"
							/>
							<h3 className="font-semibold text-lg">{volunteer.name}</h3>
							<p className="text-gray-600 text-sm">{volunteer.role}</p>
							<div className="flex mt-4 space-x-2">
								<div className="w-6 h-6 rounded-full bg-gray-200"></div>
								<div className="w-6 h-6 rounded-full bg-gray-200"></div>
								<div className="w-6 h-6 rounded-full bg-gray-200"></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VolunteerSection;
