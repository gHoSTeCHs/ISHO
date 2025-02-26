import React, { useState } from 'react';
import { Copy, Check, Heart } from 'lucide-react';
import Modal from './ui/Modal';

// Define interface for NGO details
interface NGODetails {
	name: string;
	tagline: string;
	accountName: string;
	accountNumber: string;
	bankName: string;
	ifscCode: string;
	swiftCode: string;
	branchAddress: string;
}

// Define interface for copied state
interface CopiedState {
	accountNumber: boolean;
	ifsc: boolean;
	swiftCode: boolean;
}

interface AccountDetailsProps {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NGODonationDetails: React.FC<AccountDetailsProps> = ({
	isModalOpen,
	setIsModalOpen,
}) => {
	const [copied, setCopied] = useState<CopiedState>({
		accountNumber: false,
		ifsc: false,
		swiftCode: false,
	});

	const ngoDetails: NGODetails = {
		name: 'Imo Self Help Organization',
		tagline:
			'Helping to alleviate porverty in the rural communities of NIgeria',
		accountName: 'Hope Foundation Trust',
		accountNumber: '5089 7536 2401 8903',
		bankName: 'Global Trust Bank',
		ifscCode: 'GTBK0001234',
		swiftCode: 'GTBKINBB123',
		branchAddress: 'Plot 1058 Ikenegbu Extension, Owerri, Imo State',
	};

	const copyToClipboard = (text: string, field: keyof CopiedState): void => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied({ ...copied, [field]: true });
			setTimeout(() => {
				setCopied({ ...copied, [field]: false });
			}, 2000);
		});
	};

	return (
		<Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
			<div className="bg-blue-600 p-6 text-white">
				<div className="flex items-center">
					<Heart className="mr-2" />
					<h2 className="text-2xl font-bold">{ngoDetails.name}</h2>
				</div>
				<p className="mt-1 text-blue-100">{ngoDetails.tagline}</p>
			</div>

			{/* Content */}
			<div className="p-6">
				<h3 className="text-lg font-semibold text-gray-800 mb-4">
					Bank Details for Donation
				</h3>

				<div className="space-y-4">
					<div>
						<p className="text-sm text-gray-500">Account Name</p>
						<p className="font-medium">{ngoDetails.accountName}</p>
					</div>

					<div>
						<p className="text-sm text-gray-500">Bank Name</p>
						<p className="font-medium">{ngoDetails.bankName}</p>
					</div>

					<div>
						<p className="text-sm text-gray-500">Account Number</p>
						<div className="flex items-center">
							<p className="font-medium mr-2">{ngoDetails.accountNumber}</p>
							<button
								className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
								onClick={() =>
									copyToClipboard(ngoDetails.accountNumber, 'accountNumber')
								}
								type="button">
								{copied.accountNumber ? (
									<Check size={16} />
								) : (
									<Copy size={16} />
								)}
							</button>
						</div>
					</div>

					<div>
						<p className="text-sm text-gray-500">IFSC Code</p>
						<div className="flex items-center">
							<p className="font-medium mr-2">{ngoDetails.ifscCode}</p>
							<button
								className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
								onClick={() => copyToClipboard(ngoDetails.ifscCode, 'ifsc')}
								type="button">
								{copied.ifsc ? <Check size={16} /> : <Copy size={16} />}
							</button>
						</div>
					</div>

					<div>
						<p className="text-sm text-gray-500">Branch Address</p>
						<p className="font-medium">{ngoDetails.branchAddress}</p>
					</div>
				</div>

				{/* Tax Information */}
				{/* <div className="mt-6 p-4 bg-blue-50 rounded-md">
					<p className="text-sm text-blue-800">
						<strong>Tax Benefits:</strong> All donations are eligible for tax
						deduction under Section 80G of the Income Tax Act.
					</p>
				</div> */}

				{/* Call to Action */}
				<div className="mt-6">
					<button
						onClick={() => setIsModalOpen(false)}
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
						type="button">
						<span>Close</span>
					</button>
				</div>
			</div>

			{/* Footer */}
			<div className="px-6 py-4 bg-gray-50 border-t">
				<p className="text-sm text-gray-600">
					Questions about donating? Contact us at{' '}
					<span className="font-medium">imoself@yahoo.com</span> or call{' '}
					<span className="font-medium">+(243)-367-488-64</span>
				</p>
			</div>
		</Modal>
	);
};

export default NGODonationDetails;
