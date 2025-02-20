import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	className?: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	variant = 'primary',
	size = 'md',
	className = '',
	onClick,
}) => {
	const baseStyles = 'rounded-md font-medium transition';

	const variantStyles = {
		primary: 'bg-coral-500 hover:bg-coral-600 text-white',
		secondary: 'bg-teal-500 hover:bg-teal-600 text-white',
		outline: 'border border-gray-300 hover:bg-gray-50 text-gray-800',
	};

	const sizeStyles = {
		sm: 'px-3 py-1.5 text-sm',
		md: 'px-5 py-2',
		lg: 'px-6 py-3 text-lg',
	};

	return (
		<button
			className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			onClick={onClick}
			type="button">
			{children}
		</button>
	);
};

export default Button;
