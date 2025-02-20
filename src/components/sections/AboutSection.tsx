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
						<p className="text-coral-500 font-medium">About Our Foundations</p>
						<p className="mt-6 text-gray-700">
							The Open Society{' '}
							<span className="text-coral-500">Foundations</span> are active in
							more than 120 countries around the world, using grant-giving,
							research, advocacy, impact investment, and strategic litigation to
							support the development of inclusive and vibrant democracies.
						</p>

						<Button variant="primary" className="mt-8">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
