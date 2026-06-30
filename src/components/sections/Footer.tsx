import { images } from '../../constants';
import { contact, navLinks } from '../../constants/content';

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="site-footer" id="contact">
			<div className="wrap">
				<div className="foot-grid">
					<div>
						<div className="foot-brand">
							<img src={images.logo} alt="ISHO logo" />
							<b>ISHO</b>
						</div>
						<p className="foot-about">
							Imo Self Help Organization works to build vibrant, self-reliant communities
							whose households can stand on their own — through credit, training and a
							kept ledger.
						</p>
					</div>

					<div className="foot-col">
						<h4>Explore</h4>
						{navLinks.map((link) => (
							<a key={link.href} href={link.href}>
								{link.label}
							</a>
						))}
					</div>

					<div className="foot-col">
						<h4>Contact</h4>
						<p>
							{contact.address.map((line, index) => (
								<span key={line}>
									{line}
									{index < contact.address.length - 1 ? <br /> : null}
								</span>
							))}
						</p>
						{contact.phones.map((phone) => (
							<a key={phone.href} href={phone.href}>
								{phone.label}
							</a>
						))}
						<a href={`mailto:${contact.email}`}>{contact.email}</a>
						<p className="foot-director">{contact.director}</p>
					</div>
				</div>

				<div className="foot-bottom">
					<span>© {year} IMO SELF HELP ORGANIZATION · ISHO</span>
					<span>{contact.website}</span>
				</div>
			</div>
		</footer>
	);
}
