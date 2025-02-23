import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FoundationActivities: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLParagraphElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		const description = descriptionRef.current;
		const cards = cardsRef.current;

		if (!section || !title || !description || !cards) return;

		// Set initial states
		gsap.set([title, description], {
			opacity: 0,
			y: 20,
		});

		gsap.set(cards.children, {
			opacity: 0,
			y: 30,
		});

		// Create timeline for one-time animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top 80%',
				toggleActions: 'play none none none',
				once: true,
			},
		});

		// Animations with proper cleanup
		tl.to(title, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: 'power2.out',
		})
			.to(
				description,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: 'power2.out',
				},
				'-=0.6'
			)
			.to(
				cards.children,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.3,
					ease: 'power2.out',
				},
				'-=0.4'
			);

		// Hover effects
		Array.from(cards.children).forEach((card) => {
			const cardEl = card as HTMLElement;
			const imageEl = cardEl.querySelector('img');

			if (!imageEl) return;

			cardEl.addEventListener('mouseenter', () => {
				gsap.to(imageEl, {
					scale: 1.05,
					duration: 0.3,
					ease: 'power2.out',
				});
			});

			cardEl.addEventListener('mouseleave', () => {
				gsap.to(imageEl, {
					scale: 1,
					duration: 0.3,
					ease: 'power2.out',
				});
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 px-6 bg-gray-50">
			<div className="container mx-auto">
				<p ref={titleRef} className="text-coral-500 font-bold text-2xl">
					Organisation Previous Activities
				</p>
				<p ref={descriptionRef} className="mt-6 max-w-3xl">
					The Imo Self Help Organisation has been active in more than 5 states
					across eastern Nigeria, trying to improve the lives of the people in
					any way we can.
				</p>

				<div
					ref={cardsRef}
					className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
					<div className="relative group">
						<div className="overflow-hidden rounded-2xl">
							<img
								src={images.scan6}
								alt="Foundation award distribution program"
								className="w-full h-64 object-cover transform-gpu transition-transform duration-300"
							/>
						</div>
						<div className="mt-4">
							<p className="text-gray-600 text-base font-medium">
								Training and providing adequate knowledge and assistance in food
								processing, and production.
							</p>
						</div>
					</div>

					<div className="relative group">
						<div className="overflow-hidden rounded-2xl">
							<img
								src={images.scan4}
								alt="Volunteer activities"
								className="w-full h-64 object-cover transform-gpu transition-transform duration-300"
							/>
						</div>
						<div className="mt-4">
							<p className="text-gray-600 text-base font-medium">
								Funding Micro Credits to Primary Groups in Ideato, Mbais and
								Okigwe dioceses in Imo State, Nigeria.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FoundationActivities;
