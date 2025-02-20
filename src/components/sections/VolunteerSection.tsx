// File: sections/VolunteerSection.tsx
import React from 'react';

const VolunteerSection: React.FC = () => {
	const volunteers = [
		{
			name: 'Sam Thomas',
			role: 'Water Volunteer',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'Adam Johnson',
			role: 'Medical Volunteer',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'John Smith',
			role: 'Food Volunteer',
			image: 'https://placehold.co/100x100',
		},
	];

	return (
		<section className="py-16 px-6 bg-white">
			<div className="container mx-auto">
				<h2 className="text-2xl font-semibold mb-8">Current Volunteer</h2>
				<p className="text-gray-700 max-w-4xl mb-12">
					Your money creates diverse organizational shifts of global involvement
					by acting upon individuals like yourself to dream and create a
					autonomous morals. Imo Self Help Organisation
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
