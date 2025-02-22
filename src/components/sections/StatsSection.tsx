import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StatsSection: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const statsRefs = useRef<Array<HTMLDivElement | null>>([]);

	// Counter animation function
	const animateValue = (
		element: HTMLElement,
		start: number,
		end: number,
		duration: number
	) => {
		let startTimestamp: number | null = null;
		const step = (timestamp: number) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			const current = Math.floor(progress * (end - start) + start);
			element.textContent = current + '+';
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	};

	useEffect(() => {
		// Get all stat elements
		const statElements = statsRefs.current;
		const section = sectionRef.current;

		if (!section) return;

		// Create timeline for each stat
		statElements.forEach((stat, index) => {
			if (!stat) return;

			const h3 = stat.querySelector('h3');
			const p = stat.querySelector('p');

			if (!h3 || !p) return;

			// Set initial states
			gsap.set(stat, {
				opacity: 0,
				y: 50,
			});

			// Create animation timeline
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse',
				},
			});

			// Animate each stat with a stagger
			tl.to(stat, {
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				delay: index * 0.2,
			}).add(() => {
				// Get the target number from the h3 text
				const targetNum = parseInt(h3.textContent || '0');
				// Animate the number
				animateValue(h3, 0, targetNum, 2000);
			}, '-=0.5');
		});

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-12 px-6">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div
						ref={(el) => {
							statsRefs.current[0] = el;
						}}
						className="text-center">
						<h3 className="text-4xl font-bold mb-2">1000</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of individuals who received direct services from our
							community partners
						</p>
					</div>

					<div
						ref={(el) => {
							statsRefs.current[1] = el;
						}}
						className="text-center">
						<h3 className="text-4xl font-bold mb-2">5000</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of people reached through advocacy campaigns funded by Imo
							Self Help Organisation
						</p>
					</div>

					<div
						ref={(el) => {
							statsRefs.current[2] = el;
						}}
						className="text-center">
						<h3 className="text-4xl font-bold mb-2">5</h3>
						<p className="text-sm text-gray-600 max-w-xs mx-auto">
							Number of States where Imo Self Help Organisation supported the
							interests of the masses
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StatsSection;
