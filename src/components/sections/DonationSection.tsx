import React, { useState } from 'react';
import Button from '../ui/Button';
import NGODonationDetails from '../Account';
const DonationSection: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	// const closeModal = () => setIsModalOpen(false);
	const [donationAmount, setDonationAmount] = useState<number>(50);
	const predefinedAmounts = [5000, 10000, 20000, 50000];

	return (
		<section id="donation" className="py-16 px-6 bg-pink-50">
			<div className="container mx-auto">
				<div className="max-w-3xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">
						Help us Raise Money for our Humanitarian Causes
					</h2>

					<div className="bg-white rounded-lg shadow-md p-6 mt-8">
						<div className="flex flex-wrap justify-center gap-3 mb-6">
							{predefinedAmounts.map((amount) => (
								<button
									key={amount}
									onClick={() => setDonationAmount(amount)}
									className={`px-5 py-2 rounded-md transition ${
										donationAmount === amount
											? 'bg-gray-500 text-white'
											: 'bg-gray-100 hover:bg-gray-200 text-gray-800'
									}`}>
									#{amount}
								</button>
							))}
							<button
								onClick={() => setDonationAmount(0)}
								className={`px-5 py-2 rounded-md transition ${
									donationAmount === 0
										? 'bg-gray-500 text-white'
										: 'bg-gray-100 hover:bg-gray-200 text-gray-800'
								}`}>
								Custom
							</button>
						</div>

						{donationAmount === 0 && (
							<div className="mb-6">
								<label htmlFor="custom-amount" className="sr-only">
									Custom amount
								</label>
								<div className="relative">
									<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
										#
									</span>
									<input
										type="number"
										id="custom-amount"
										className="w-full py-2 pl-8 pr-4 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
										placeholder="Enter custom amount"
										min="1"
									/>
								</div>
							</div>
						)}

						<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
							<div className="w-full sm:w-auto">
								<Button
									onClick={() => setIsModalOpen(true)}
									variant="outline"
									size="lg"
									className="w-full sm:w-auto">
									Donate Now
								</Button>
							</div>
						</div>

						<div className="mt-6 text-center">
							<p className="text-sm font-semibold text-gray-600">
								With your help, we can reach more people in need, and make an
								unforseen impact in their lives.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
						<div className="bg-white p-5 rounded-lg shadow-sm">
							<div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-lg mb-2">Financial Transparency</h3>
							<p className="text-gray-600 font-semibold text-sm">
								We're committed to transparency. 90% of donations go directly to
								our programs.
							</p>
						</div>

						<div className="bg-white p-5 rounded-lg shadow-sm">
							<div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-lg mb-2">Secure Donations</h3>
							<p className="text-gray-600 font-semibold text-sm">
								Your personal and payment information is protected with
								bank-level security.
							</p>
						</div>

						<div className="bg-white p-5 rounded-lg shadow-sm">
							<div className="h-12 w-12 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
								<svg
									className="w-6 h-6 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
									/>
								</svg>
							</div>
							<h3 className="font-bold text-lg mb-2">Impact Reporting</h3>
							<p className="text-gray-600 font-semibold text-sm">
								Receive updates about how your donation is making a difference
								in communities.
							</p>
						</div>
					</div>
				</div>
			</div>

			<NGODonationDetails
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
		</section>
	);
};

export default DonationSection;
