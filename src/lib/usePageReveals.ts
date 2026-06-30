import { useEffect } from 'react';

function setLeadingNumber(el: HTMLElement, text: string): void {
	const first = el.firstChild;
	if (first && first.nodeType === Node.TEXT_NODE) {
		first.nodeValue = text;
	} else {
		el.insertBefore(document.createTextNode(text), el.firstChild);
	}
}

function runCountUp(scope: Element): void {
	scope.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
		const end = parseInt(el.getAttribute('data-count') ?? '0', 10);
		const duration = 1300;
		let start: number | null = null;

		const step = (ts: number): void => {
			if (start === null) start = ts;
			const progress = Math.min((ts - start) / duration, 1);
			const eased = 1 - Math.pow(1 - progress, 3);
			const value = Math.floor(eased * end);
			setLeadingNumber(el, value.toLocaleString('en-US'));
			if (progress < 1) requestAnimationFrame(step);
			else setLeadingNumber(el, end.toLocaleString('en-US'));
		};

		requestAnimationFrame(step);
	});
}

/**
 * Drives the scroll-reveal animations and the figures count-up, mirroring the
 * source design's vanilla behaviour. Respects prefers-reduced-motion.
 */
export function usePageReveals(): void {
	useEffect(() => {
		const reduce =
			window.matchMedia &&
			window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const targets = document.querySelectorAll<HTMLElement>('.reveal');

		if (reduce) {
			targets.forEach((el) => el.classList.add('in'));
			document.querySelectorAll('.figures').forEach(runCountUp);
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add('in');
					if (entry.target.classList.contains('figures')) {
						runCountUp(entry.target);
					}
					observer.unobserve(entry.target);
				});
			},
			{ threshold: 0.16 }
		);

		targets.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);
}
