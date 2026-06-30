import { images } from '../../constants';
import { ledgerEntries } from '../../constants/content';

export function HeroSection() {
	return (
		<section className="hero" id="top">
			<div className="wrap hero-grid">
				<div className="hero-copy">
					<p className="eyebrow reveal">Owerri · Imo State · since 1984</p>
					<h1 className="display reveal">
						<span className="line">Small loans.</span>
						<span className="line">Steady books.</span>
						<span className="line">
							<span className="mark laterite">
								Self-help
								<svg viewBox="0 0 200 12" preserveAspectRatio="none">
									<path
										d="M3 8 C40 3, 80 11, 120 6 S185 3, 197 7"
										fill="none"
										stroke="currentColor"
										strokeWidth="4"
										strokeLinecap="round"
									/>
								</svg>
							</span>{' '}
							that lasts.
						</span>
					</h1>
					<p className="hero-lede reveal">
						For four decades ISHO has put credit, training and a kept ledger into the
						hands of rural women and low-income families across South-East Nigeria — so a
						market stall becomes a livelihood, and a livelihood becomes a future.
					</p>
					<div className="hero-cta reveal">
						<a className="btn btn--clay" href="#support">
							Fund a primary group <span className="arrow">→</span>
						</a>
						<a className="btn btn--ghost" href="#story">
							See how it works
						</a>
					</div>
					<p className="hero-since reveal">
						<span>Registered 1990 · CAC 1995</span>
						<span style={{ color: 'var(--rule-strong)' }}>—</span>
						<span>
							<b>5,000</b> members &amp; counting
						</span>
					</p>
				</div>

				<aside className="ledger reveal" aria-label="ISHO at a glance">
					<div className="ledger-photo">
						<img
							src={images.Pic9}
							alt="An ISHO member keeping her records at her market stall"
						/>
						<span className="tab mono">FIELD LEDGER · OWERRI</span>
					</div>
					<div className="ledger-head">
						<b>The account, in brief</b>
						<span>EST. 1984</span>
					</div>
					<div className="ledger-rows">
						{ledgerEntries.map((entry) => (
							<div className="ledger-row" key={entry.label}>
								<span className="lbl">{entry.label}</span>
								<span className="val">
									{entry.value}
									{entry.suffix ? <small>&nbsp;&nbsp;{entry.suffix}</small> : null}
								</span>
							</div>
						))}
					</div>
				</aside>
			</div>
		</section>
	);
}
