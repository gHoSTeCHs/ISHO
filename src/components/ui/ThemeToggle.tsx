import { useState } from 'react';

type Theme = 'light' | 'dark';

function currentTheme(): Theme {
	return document.documentElement.getAttribute('data-theme') === 'dark'
		? 'dark'
		: 'light';
}

export function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>(currentTheme);

	const toggle = (): void => {
		const next: Theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', next);
		try {
			localStorage.setItem('isho-theme', next);
		} catch {
			/* storage unavailable — theme still applies for the session */
		}
		setTheme(next);
	};

	return (
		<button
			className="icon-btn"
			type="button"
			onClick={toggle}
			aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
			{theme === 'dark' ? (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
				</svg>
			) : (
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round">
					<circle cx="12" cy="12" r="4.2" />
					<path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" />
				</svg>
			)}
		</button>
	);
}
