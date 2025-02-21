import React from 'react';
import Button from '../ui/Button';

const AboutSection: React.FC = () => {
	return (
		<section className="py-16 px-6">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-12">
					<div className="md:w-1/3">
						<img
							src="https://placehold.co/400x500"
							alt="Children smiling"
							className="w-full h-auto object-cover rounded-lg"
						/>
					</div>

					<div className="md:w-2/3">
						<p className="text-coral-500 font-medium">About Our Organization</p>
						<p className="mt-6 text-gray-700">
							Imo Self Help Organization (ISHO) started as an Academic Project
							in 1984 with the center for Applied Religion and Education Ibadan
							with the theme{' '}
							<span className="font-medium">
								“finding Alternative for the poor”
							</span>{' '}
							by the program Coordinator, Godson C. Echefu.
						</p>

						<Button variant="secondary" className="mt-8">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
