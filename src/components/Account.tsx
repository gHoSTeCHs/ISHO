import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import Modal from './ui/Modal';

interface DonationModalProps {
	show: boolean;
	onClose: () => void;
}

interface NGODetails {
	name: string;
	tagline: string;
	accountName: string;
	accountNumber: string;
	bankName: string;
	paypal: string;
	officeAddress: string;
}

type CopyField = 'accountNumber' | 'paypal';

const ngoDetails: NGODetails = {
	name: 'Give to Imo Self Help Organization',
	tagline:
		'Your gift is lent, repaid and lent again — it keeps working, member after member.',
	accountName: 'Echefu Godson Ogechukwu',
	accountNumber: '2031656083',
	bankName: 'First Bank',
	paypal: 'echefugodson50@gmail.com',
	officeAddress: '1 Works Road, Owerri, Imo State, Nigeria',
};

export function DonationModal({ show, onClose }: DonationModalProps) {
	const [copied, setCopied] = useState<CopyField | null>(null);

	const copyToClipboard = (text: string, field: CopyField): void => {
		navigator.clipboard.writeText(text).then(() => {
			setCopied(field);
			setTimeout(() => setCopied(null), 2000);
		});
	};

	return (
		<Modal show={show} onClose={onClose}>
			<div className="give-modal-head">
				<button
					className="gm-close"
					type="button"
					onClick={onClose}
					aria-label="Close donation details">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round">
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>
				<h2 className="gm-title">{ngoDetails.name}</h2>
				<p>{ngoDetails.tagline}</p>
			</div>

			<div className="give-modal-body">
				<h3>Bank details for your gift</h3>

				<div className="acct-row">
					<span className="acct-k">Account name</span>
					<span className="acct-v">{ngoDetails.accountName}</span>
				</div>

				<div className="acct-row">
					<span className="acct-k">Bank</span>
					<span className="acct-v">{ngoDetails.bankName}</span>
				</div>

				<div className="acct-row">
					<span className="acct-k">Account number</span>
					<span className="acct-v">
						{ngoDetails.accountNumber}
						<button
							className="copy-btn"
							type="button"
							onClick={() =>
								copyToClipboard(ngoDetails.accountNumber, 'accountNumber')
							}
							aria-label="Copy account number">
							{copied === 'accountNumber' ? (
								<Check size={16} />
							) : (
								<Copy size={16} />
							)}
						</button>
					</span>
				</div>

				<div className="acct-row">
					<span className="acct-k">PayPal</span>
					<span className="acct-v">
						{ngoDetails.paypal}
						<button
							className="copy-btn"
							type="button"
							onClick={() => copyToClipboard(ngoDetails.paypal, 'paypal')}
							aria-label="Copy PayPal address">
							{copied === 'paypal' ? <Check size={16} /> : <Copy size={16} />}
						</button>
					</span>
				</div>

				<div className="acct-row">
					<span className="acct-k">Office</span>
					<span className="acct-v">{ngoDetails.officeAddress}</span>
				</div>

				<button
					className="btn give-full give-modal-done"
					type="button"
					onClick={onClose}>
					Done
				</button>
			</div>

			<div className="give-modal-foot">
				Questions about giving? Email <b>info@isho-nigeria.org</b> or call{' '}
				<b>+234 803 339 0600</b>.
			</div>
		</Modal>
	);
}
