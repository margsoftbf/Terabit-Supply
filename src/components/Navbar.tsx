'use client';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
	Bars3Icon,
	XMarkIcon,
	HeartIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import logo from '../../public/assets/logo.png';

const navigation = [
	{ name: 'Home', href: '#', current: true },
	{ name: 'Category', href: '#', current: false },
	{ name: 'About us', href: '#', current: false },
	{ name: 'Popular', href: '#', current: false },
	{ name: 'Deals', href: '#', current: false },
	{ name: 'Newsletter', href: '#', current: false },
	{ name: 'Testimonials', href: '#', current: false },
	{ name: 'Contact', href: '#', current: false },
];

const Navbar = () => {
	return (
		<Disclosure as='header' className='bg-white shadow'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8'>
						<div className='relative flex h-16 justify-between'>
							<div className='relative z-10 flex px-2 lg:px-0'>
								<div className='flex flex-shrink-0 items-center'>
									<img
										className='h-10 w-auto mr-2'
										src={logo.src}
										alt='Terabit supply'
									/>
									<span className='hidden lg:block font-raleway font-semibold'>
										<span className='font-extrabold text-darkBlue text-2xl'>
											T
										</span>
										erabit Supply
									</span>
								</div>
							</div>
							<div className='relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0'>
								<div className='w-full sm:max-w-xs'>
									<label htmlFor='search' className='sr-only'>
										Search
									</label>
									<div className='relative'>
										<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
											<MagnifyingGlassIcon
												className='h-5 w-5 text-gray-400'
												aria-hidden='true'
											/>
										</div>
										<input
											id='search'
											name='search'
											className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkBlue sm:text-sm sm:leading-6'
											placeholder='Search'
											type='search'
										/>
									</div>
								</div>
							</div>
							<div className='relative z-10 flex items-center lg:hidden'>
								<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-darkBlue'>
									<span className='absolute -inset-0.5' />
									<span className='sr-only'>Open menu</span>
									{open ? (
										<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
									) : (
										<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
									)}
								</Disclosure.Button>
							</div>
							<div className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
								<button
									type='button'
									className='relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
								>
									<span className='absolute -inset-1.5' />
									<span className='sr-only'>View notifications</span>
									<HeartIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								<div className='ml-4 flow-root lg:ml-8'>
									<a href='#' className='group -m-2 flex items-center p-2'>
										<ShoppingBagIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
										<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
											0
										</span>
										<span className='sr-only'>items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
						<nav
							className='hidden lg:flex lg:justify-center lg:space-x-8 lg:py-2'
							aria-label='Global'
						>
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={`${
										item.current
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
									}
										inline-flex items-center rounded-md py-2 px-3 text-sm font-medium
									`}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</a>
							))}
						</nav>
					</div>

					<Disclosure.Panel as='nav' className='lg:hidden' aria-label='Global'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className={`${
										item.current
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
									}
										block rounded-md py-2 px-3 text-base font-medium
									`}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className='border-t border-gray-200 pb-3 pt-4'>
							<div className='flex items-center px-4'>
								<button
									type='button'
									className='relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
								>
									<span className='absolute -inset-1.5' />
									<span className='sr-only'>Wishlist</span>
									<HeartIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								<div className='ml-4 flow-root lg:ml-8'>
									<a href='#' className='group -m-2 flex items-center p-2'>
										<ShoppingBagIcon
											className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
										<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
											0
										</span>
										<span className='sr-only'>items in cart, view bag</span>
									</a>
								</div>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
