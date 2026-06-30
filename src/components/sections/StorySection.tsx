import { images } from '../../constants';

export function StorySection() {
	return (
		<section className="band band--paper2" id="story">
			<div className="wrap story-grid">
				<div className="story-figs reveal">
					<figure className="fig fig--tall">
						<img
							src={images.Pic2}
							alt="ISHO field officers visiting a market trader and her produce stall"
						/>
						<figcaption>Field visit — a primary group member's produce stall</figcaption>
					</figure>
					<figure className="fig">
						<img src={images.Pic3} alt="A member at work in her hairdressing salon" />
						<figcaption>Salon, funded by a recycled loan</figcaption>
					</figure>
					<figure className="fig">
						<img
							src={images.Pic6}
							alt="A mother and her children in her provisions kiosk"
						/>
						<figcaption>Provisions kiosk, Owerri</figcaption>
					</figure>
				</div>
				<div className="story-copy reveal">
					<p className="eyebrow">How self-help works</p>
					<h2>It begins with a passbook, not a handout.</h2>
					<p>
						A woman joins a primary group of her neighbours. The group guarantees one
						another, receives a first small loan, and keeps its own books — every naira in
						and out recorded by hand. Repayments fund the next member. Training comes
						alongside the money.
					</p>
					<p>
						Over a cycle, the stall grows: more stock, a second table, a hired hand. The
						loan is repaid not out of charity but out of trade — and the ledger proves it.
					</p>
					<blockquote className="story-quote">
						"Finding alternatives for the poor." — the founding theme, 1984, and still the
						test we hold every programme to.
					</blockquote>
					<a className="btn" href="#support">
						Back a primary group <span className="arrow">→</span>
					</a>
				</div>
			</div>
		</section>
	);
}
