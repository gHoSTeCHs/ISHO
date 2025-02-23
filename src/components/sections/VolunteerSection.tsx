import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VolunteerSection: React.FC = () => {
	const volunteers = [
		{
			name: 'Godson C. Echefu',
			role: 'Executive Director',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'Chief G. U. Ejimole',
			role: 'Chairman',
			image: 'https://placehold.co/100x100',
		},
		{
			name: 'Mr. Chinedu Egere',
			role: 'Secretary',
			image: 'https://placehold.co/100x100',
		},
	];

	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const cardsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		const description = descriptionRef.current;
		const cards = cardsRef.current;

		if (!section || !title || !description || !cards) return;

		// Reset any existing transforms that might affect layout
		gsap.set(cards.children, {
			clearProps: 'all',
		});

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
					stagger: 0.2,
					ease: 'power2.out',
					clearProps: 'transform',
				},
				'-=0.4'
			);

		// Hover effects with proper cleanup
		const hoverEffects = Array.from(cards.children).map((card) => {
			const cardEl = card as HTMLElement;

			const enterHandler = () => {
				gsap.to(cardEl, {
					y: -5,
					duration: 0.3,
					ease: 'power2.out',
				});
			};

			const leaveHandler = () => {
				gsap.to(cardEl, {
					y: 0,
					duration: 0.3,
					ease: 'power2.out',
				});
			};

			cardEl.addEventListener('mouseenter', enterHandler);
			cardEl.addEventListener('mouseleave', leaveHandler);

			return { element: cardEl, enter: enterHandler, leave: leaveHandler };
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			hoverEffects.forEach(({ element, enter, leave }) => {
				element.removeEventListener('mouseenter', enter);
				element.removeEventListener('mouseleave', leave);
			});
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 px-6 bg-white">
			<div className="container mx-auto">
				<h2 ref={titleRef} className="text-2xl font-bold mb-8">
					Our Key Officers
				</h2>
				<p ref={descriptionRef} className="text-gray-700 max-w-4xl mb-12">
					These are some of the key individuals who make it happen. They have
					put in all they have, to ensure that the future of this organisation
					remains bright.
				</p>

				<div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{volunteers.map((volunteer, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg p-4 h-full transform-gpu">
							<div className="flex flex-col h-full">
								<img
									src={volunteer.image}
									alt={volunteer.name}
									className="w-full h-48 object-cover rounded-lg mb-4"
								/>
								<h3 className="font-semibold text-lg">{volunteer.name}</h3>
								<p className="text-gray-600 text-sm">{volunteer.role}</p>
								<div className="flex mt-4 space-x-2">
									<div className="w-6 h-6 rounded-full bg-gray-200"></div>
									<div className="w-6 h-6 rounded-full bg-gray-200"></div>
									<div className="w-6 h-6 rounded-full bg-gray-200"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default VolunteerSection;
