import { useState } from 'react';
import { donationAmounts } from '../../constants/content';
import { DonationModal } from '../Account';

export function SupportSection() {
	const [selected, setSelected] = useState('10,000');
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<section className="band cta" id="support">
			<div className="wrap cta-grid">
				<div className="reveal">
					<p className="eyebrow" style={{ color: 'var(--cream-soft)' }}>
						Partner with us
					</p>
					<h2>Fund the next primary group.</h2>
					<p>
						A gift to ISHO is not spent once — it is lent, repaid and lent again. Back a
						group of women today and your contribution keeps working, member after member,
						season after season.
					</p>
					<div className="cta-actions">
						<button className="btn" type="button" onClick={() => setModalOpen(true)}>
							Give now <span className="arrow">→</span>
						</button>
						<a className="btn btn--line" href="#contact">
							Become a partner organisation
						</a>
					</div>
				</div>
				<div className="give-card reveal">
					<p className="gh">Choose an amount (₦)</p>
					<div className="amts">
						{donationAmounts.map((amount) => (
							<button
								className="amt"
								type="button"
								key={amount}
								aria-pressed={selected === amount}
								onClick={() => setSelected(amount)}>
								{amount}
							</button>
						))}
					</div>
					<button
						className="btn give-full"
						type="button"
						onClick={() => setModalOpen(true)}>
						Continue to give
					</button>
					<p className="give-note">
						90 kobo in every naira reaches the field. Records open to every partner.
					</p>
				</div>
			</div>

			<DonationModal show={modalOpen} onClose={() => setModalOpen(false)} />
		</section>
	);
}
