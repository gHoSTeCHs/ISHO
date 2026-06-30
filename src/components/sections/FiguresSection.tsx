import { figures } from '../../constants/content';

export function FiguresSection() {
	return (
		<section className="band" style={{ paddingTop: 'clamp(40px, 6vw, 72px)' }}>
			<div className="wrap">
				<div className="figures reveal">
					{figures.map((figure) => (
						<div className="figure" key={figure.cap}>
							<div className="num" data-count={figure.count}>
								{figure.display}
								<span className="unit">{figure.unit ?? ''}</span>
							</div>
							<div className="cap">{figure.cap}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
