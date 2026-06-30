import { useState } from 'react';
import { images } from '../../constants';
import { navLinks } from '../../constants/content';
import { ThemeToggle } from '../ui/ThemeToggle';

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="site-header">
			<div className="wrap nav">
				<a className="brand" href="#top">
					<img src={images.logo} alt="ISHO logo — a raised fist" />
					<span className="brand-text">
						<b>ISHO</b>
						<span>Imo Self Help Org.</span>
					</span>
				</a>

				<nav
					className={menuOpen ? 'nav-links open' : 'nav-links'}
					aria-label="Primary"
					onClick={() => setMenuOpen(false)}>
					{navLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>

				<a className="btn btn--clay" href="#support" style={{ padding: '10px 20px' }}>
					Partner with us
				</a>

				<ThemeToggle />

				<button
					className="icon-btn menu-btn"
					aria-label="Open menu"
					aria-expanded={menuOpen}
					type="button"
					onClick={() => setMenuOpen((open) => !open)}>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.8"
						strokeLinecap="round">
						<path d="M4 7h16M4 12h16M4 17h16" />
					</svg>
				</button>
			</div>
		</header>
	);
}
