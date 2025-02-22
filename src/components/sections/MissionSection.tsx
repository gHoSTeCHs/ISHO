import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissionSection: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const titleRef = useRef<HTMLParagraphElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const imagesRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const title = titleRef.current;
		const description = descriptionRef.current;
		const imagesContainer = imagesRef.current;

		if (!section || !title || !description || !imagesContainer) return;

		// Set initial states
		gsap.set([title, description], {
			opacity: 0,
			y: 30,
		});

		gsap.set(imagesContainer.children, {
			opacity: 0,
			y: 50,
		});

		// Create main timeline
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top 80%',
				end: 'bottom 20%',
				toggleActions: 'play none none reverse',
			},
		});

		// Animate text elements
		tl.to(title, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: 'power3.out',
		})
			.to(
				description,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					ease: 'power3.out',
				},
				'-=0.7'
			)
			// Animate images with stagger
			.to(
				imagesContainer.children,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.3,
					ease: 'power3.out',
				},
				'-=0.5'
			);

		// Add hover animations for images
		const imageContainers = imagesContainer.children;
		Array.from(imageContainers).forEach((container: Element) => {
			const imageContainer = container as HTMLElement;
			const image = imageContainer.querySelector('img');
			const label = imageContainer.querySelector('div.absolute');

			if (!image || !label) return;

			// Create hover animation
			const hoverTl = gsap.timeline({ paused: true });
			hoverTl
				.to(image, {
					scale: 1.05,
					duration: 0.5,
					ease: 'power2.out',
				})
				.to(
					label,
					{
						y: -5,
						duration: 0.3,
						ease: 'power2.out',
					},
					0
				);

			// Add hover listeners
			imageContainer.addEventListener('mouseenter', () => hoverTl.play());
			imageContainer.addEventListener('mouseleave', () => hoverTl.reverse());
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section
			ref={sectionRef}
			className="bg-navy-900 py-12 px-6 overflow-hidden">
			<div className="container mx-auto">
				<div className="mb-8">
					<p ref={titleRef} className="text-2xl font-bold">
						Our Mission
					</p>
					<p ref={descriptionRef} className="mt-6 max-w-3xl">
						The Imo Self Help <span className="">Organisation</span> is active
						in more than 5 states across Nigeria, through the provision of
						Microfinance service and capacity building/support services in
						Health, Education, Enterprise development and Agriculture to rural
						poor.
					</p>
				</div>

				<div
					ref={imagesRef}
					className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
					<div className="relative overflow-hidden rounded-lg">
						<img
							src={images.Pic6}
							alt="Water and sanitation program"
							className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500"
						/>
						<div className="absolute bottom-4 left-4 bg-teal-700 text-white text-xs px-3 py-1 rounded">
							Poverty Alleviation
						</div>
					</div>

					<div className="relative overflow-hidden rounded-lg">
						<img
							src={images.Pic9}
							alt="World Health Foundation"
							className="w-full h-64 object-cover rounded-lg transform transition-transform duration-500"
						/>
						<div className="absolute bottom-4 left-4 bg-teal-700 text-white text-xs px-3 py-1 rounded">
							Business Grants
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MissionSection;
