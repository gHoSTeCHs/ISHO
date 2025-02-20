import React from 'react';

const Logo: React.FC = () => {
	return (
		<div className="flex items-center space-x-2">
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<circle cx="16" cy="16" r="16" fill="#FF6B6B" />
				<path
					d="M10 16H22M16 10V22"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
				/>
			</svg>
			<span className="font-bold text-xl">ISHO</span>
		</div>
	);
};

export default Logo;
