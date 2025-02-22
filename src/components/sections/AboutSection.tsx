import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { images } from '../../constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
	const sectionRef = useRef<HTMLElement>(null);
	const imageRef = useRef<HTMLImageElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLParagraphElement>(null);
	const textRef = useRef<HTMLParagraphElement>(null);
	// const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const section = sectionRef.current;
		const image = imageRef.current;
		const content = contentRef.current;
		const title = titleRef.current;
		const text = textRef.current;
		// const button = buttonRef.current;

		if (!section || !image || !content || !title || !text) return;

		// Set initial states
		gsap.set(image, {
			opacity: 0,
			x: -50,
		});

		gsap.set([title, text], {
			opacity: 0,
			x: 50,
		});

		// Create timeline for one-time animation
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: section,
				start: 'top 80%',
				// "play none none none" means:
				// onEnter: play, onLeave: none, onEnterBack: none, onLeaveBack: none
				// This ensures the animation only plays once when entering the viewport
				toggleActions: 'play none none none',
				once: true, // This ensures the animation only happens once
			},
		});

		// Animate elements
		tl.to(image, {
			opacity: 1,
			x: 0,
			duration: 1,
			ease: 'power3.out',
		}).to(
			[title, text],
			{
				opacity: 1,
				x: 0,
				duration: 1,
				stagger: 0.2,
				ease: 'power3.out',
			},
			'-=0.5'
		);

		// Add hover effect for image
		const imageHover = gsap.to(image, {
			scale: 1.02,
			duration: 0.3,
			paused: true,
			ease: 'power2.out',
		});

		image.addEventListener('mouseenter', () => imageHover.play());
		image.addEventListener('mouseleave', () => imageHover.reverse());

		// Cleanup
		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<section ref={sectionRef} className="py-16 px-6 overflow-hidden">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row gap-12">
					<div className="md:w-1/3">
						<div className="overflow-hidden rounded-lg">
							<img
								ref={imageRef}
								src={images.scan7}
								alt="Children smiling"
								className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
							/>
						</div>
					</div>

					<div ref={contentRef} className="md:w-2/3">
						<p ref={titleRef} className="text-coral-500 font-bold text-2xl">
							About Our Organization
						</p>
						<p ref={textRef} className="mt-6 text-gray-700">
							Imo Self Help Organization (ISHO) started as an Academic Project
							in 1984 with the center for Applied Religion and Education Ibadan
							with the theme{' '}
							<span className="font-medium">
								"finding Alternative for the poor"
							</span>{' '}
							by the program Coordinator, Godson C. Echefu.
						</p>

						<Button
							variant="secondary"
							className="mt-8 transform hover:scale-105 transition-all duration-300">
							Learn More
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
