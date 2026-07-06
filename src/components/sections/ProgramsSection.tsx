import { programs } from '../../constants/content';

export function ProgramsSection() {
	return (
		<section className="band" id="programs">
			<div className="wrap">
				<div className="sec-head reveal">
					<p className="eyebrow">What we run</p>
					<h2>Five line items, one outcome: a household that can stand on its own.</h2>
					<p>
						Each programme is a different entry in the same book. They reinforce one
						another: a loan is steadier when the borrower is also trained, healthier, and
						farming better.
					</p>
				</div>
				<div className="prog-table reveal">
					{programs.map((program) => (
						<a className="prog-row" href="#story" key={program.no}>
							<span className="no">{program.no}</span>
							<span className="name">{program.name}</span>
							<span className="desc">{program.desc}</span>
							<span className="go">
								SEE METHOD <span className="arrow">→</span>
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
