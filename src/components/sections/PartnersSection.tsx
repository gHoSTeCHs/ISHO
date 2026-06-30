import { partners, networks } from '../../constants/content';

export function PartnersSection() {
	return (
		<section className="band band--paper2">
			<div className="wrap">
				<div className="sec-head reveal" style={{ marginBottom: '32px' }}>
					<p className="eyebrow">Backed &amp; affiliated</p>
					<h2>Funded by partners who believe in self-help.</h2>
				</div>
				<div className="partners reveal">
					{partners.map((partner) => (
						<span className="chip" key={partner}>
							{partner}
						</span>
					))}
				</div>
				<p className="net-line reveal">
					<b>In network with:</b> {networks}
				</p>
			</div>
		</section>
	);
}
