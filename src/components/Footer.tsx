import { footerNavigation } from '@/data/data';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-white'>
			<div className='mx-auto text-center max-w-7xl overflow-hidden px-6 py-8 lg:px-8'>
				<nav
					className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
					aria-label='Footer'
				>
					{footerNavigation.main.map((item) => (
						<div key={item.name} className='pb-6'>
							<a
								href={item.href}
								className='text-sm leading-6 text-gray-600 hover:text-gray-900'
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className='mt-10 flex justify-center space-x-10'>
					{footerNavigation.social.map((item) => {
						const IconComponent = item.icon;
						return (
							<a
								key={item.name}
								href={item.href}
								className='text-gray-400 hover:text-gray-500'
							>
								<span className='sr-only'>{item.name}</span>
								<IconComponent className='h-6 w-6' aria-hidden='true' />
							</a>
						);
					})}
				</div>
				<p className='mt-10 text-center text-xs leading-5 text-gray-500'>
					&copy; 2023 Marcin Garski, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
