import React, { useEffect, useRef } from 'react';
import { images } from '../../constants';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
	// Create refs for elements we want to animate
	const headingRef = useRef(null);
	const buttonsRef = useRef(null);
	const imageRef = useRef(null);
	const textContentRef = useRef(null);

	useEffect(() => {
		// Create a timeline for smooth sequence of animations
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

		// Prepare initial states
		gsap.set(
			[
				headingRef.current,
				buttonsRef.current,
				imageRef.current,
				textContentRef.current,
			],
			{
				opacity: 0,
				y: 30,
			}
		);

		// Animation sequence
		tl.to(headingRef.current, {
			opacity: 1,
			y: 0,
			duration: 1,
		})
			.to(
				buttonsRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					stagger: 0.2,
				},
				'-=0.5'
			)
			.to(
				imageRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 1,
				},
				'-=0.3'
			)
			.to(
				textContentRef.current,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
				},
				'-=0.5'
			);

		// Optional: Add hover animations for buttons
		const buttons = document.querySelectorAll('button');
		buttons.forEach((button) => {
			button.addEventListener('mouseenter', () => {
				gsap.to(button, {
					scale: 1.05,
					duration: 0.3,
				});
			});
			button.addEventListener('mouseleave', () => {
				gsap.to(button, {
					scale: 1,
					duration: 0.3,
				});
			});
		});
	}, []); // Empty dependency array means this runs once on mount

	return (
		<section className="bg-gray-50 py-12 px-6 md:py-16">
			<div className="container mx-auto">
				<div className="max-w-3xl">
					<h1
						ref={headingRef}
						className="text-4xl md:text-5xl font-bold mb-2 leading-tight">
						Make South-East Great Again
					</h1>

					<div ref={buttonsRef} className="flex flex-wrap gap-4 mt-6 mb-8">
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Funding
						</button>
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Development
						</button>
						<button className="bg-gray-200 px-6 py-2 rounded-full text-sm">
							Save
						</button>
					</div>
				</div>

				<div className="mt-12 flex flex-col md:flex-row gap-8">
					<div ref={imageRef} className="md:w-2/3">
						<img
							src={images.Pic4}
							alt="Children in need"
							className="w-full h-auto object-cover rounded-lg shadow-md"
						/>
					</div>

					<div
						ref={textContentRef}
						className="md:w-1/3 flex flex-col justify-between">
						<div>
							<p className="text-coral-500 font-bold text-2xl">Our Main Aim</p>
							<p className="mt-4 text-gray-700">
								To alleviate Poverty in the south eastern states of Nigeria,
								through the provision of Microfinance service and capacity
								building/support services in Health, Education, Enterprise
								development and Agriculture to rural poor.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
