import { branches } from '../../constants/content';

export function ReachSection() {
	return (
		<section className="band" id="reach">
			<div className="wrap reach-grid">
				<div className="reach-copy reveal">
					<p className="eyebrow">Where we work</p>
					<h2>Ten branches, rooted in rural Imo State.</h2>
					<p>
						We work where the need is, not where it is convenient — across the local
						government areas and dioceses of Imo State, close enough that a field officer
						knows every group by name.
					</p>
					<p className="reach-note">
						Micro-credit funded to primary groups in the Ideato, Mbaise and Okigwe
						dioceses, among others.
					</p>
				</div>
				<div className="branch-list reveal" aria-label="Branch locations">
					{branches.map((branch) => (
						<div className="branch" key={branch.no}>
							<span className="n">{branch.no}</span>
							<span className="nm">{branch.name}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
