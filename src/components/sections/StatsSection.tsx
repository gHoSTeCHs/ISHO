import React from 'react';

const StatsSection: React.FC = () => {
	return (
		<section className="py-12 px-6">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="text-center">
						<h3 className="text-4xl font-bold mb-2">1M+</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of individuals who received direct services from our
							community partners
						</p>
					</div>

					<div className="text-center">
						<h3 className="text-4xl font-bold mb-2">40M+</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of people reached through advocacy campaigns funded by Open
							Society Foundations
						</p>
					</div>

					<div className="text-center">
						<h3 className="text-4xl font-bold mb-2">90+</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of countries where Open Society Foundations supported civil
							society organizations
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
