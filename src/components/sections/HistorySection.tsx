import { timeline } from '../../constants/content';

export function HistorySection() {
	return (
		<section className="band band--ink" id="history">
			<div className="wrap">
				<div className="sec-head sec-head--ink reveal">
					<p className="eyebrow">How we got here</p>
					<h2>Forty years, four turning points.</h2>
				</div>
				<div className="timeline reveal">
					{timeline.map((item) => (
						<div className="tl-row" key={item.year}>
							<span className="tl-year">{item.year}</span>
							<div className="tl-body">
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
