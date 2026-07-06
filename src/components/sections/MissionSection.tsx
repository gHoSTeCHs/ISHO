import { focusAreas } from '../../constants/content';

export function MissionSection() {
	return (
		<section className="band band--ink" id="mission">
			<div className="wrap mission-wrap">
				<div className="mission reveal">
					<p>
						<span className="big">To alleviate poverty</span>
						<span className="big">in South-East Nigeria,</span>
						<span className="big">by people, for people.</span>
					</p>
					<p className="small">
						We do it through microfinance and hands-on capacity building in health,
						education, enterprise and agriculture, meeting the rural poor where they
						are, on their own terms. "Self help" is not a slogan here; it is the method.
					</p>
				</div>
				<div className="mission-aside reveal" aria-label="Areas of focus">
					{focusAreas.map((area) => (
						<div className="aside-row" key={area.no}>
							<span className="k">{area.no}</span>
							<span className="v">{area.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
