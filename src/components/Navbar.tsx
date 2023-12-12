'use client';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import {
	Bars3Icon,
	XMarkIcon,
	HeartIcon,
	ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import logo from '../../public/assets/logo.webp';
import { useState } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { navigation } from '../data/data';
import { CartItem } from '../types/types';
import { Popover, Transition } from '@headlessui/react';

interface CartState {
	items: Record<string, CartItem>;
}

const Navbar = () => {
	const [isCartOpen, setCartOpen] = useState(false);
	const [isWishlistOpen, setWishlistOpen] = useState(false);
	const router = useRouter();
	const [activeLink, setActiveLink] = useState('/');
	const isHomePage = router.pathname === '/';

	const selectCartItemsCount = (state: { cart: CartState }) => {
		return Object.values(state.cart.items).reduce(
			(total: number, item: CartItem) => total + item.quantity,
			0
		);
	};

	const cartItemsCount = useSelector(selectCartItemsCount);
	const toggleCart = () => {
		setWishlistOpen(false);
		setCartOpen(!isCartOpen);
	};

	const toggleWishlist = () => {
		setCartOpen(false);
		setWishlistOpen(!isWishlistOpen);
	};

	const handleScroll = (itemHref: string) => {
		const offset = 500;
		const element = document.getElementById(itemHref);
		if (element) {
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - offset;
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	return (
		<Disclosure as='header' className='bg-white shadow sticky top-0 z-50'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-8xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8'>
						<div className='relative flex h-16 justify-between'>
							<div className='relative z-10 flex px-2 lg:px-0'>
								<Link href='/' className='flex flex-shrink-0 items-center'>
									<Image
										src={logo}
										alt='Terabit supply'
										className='mr-2 h-10 w-10'
									/>
									<span className='hidden lg:block font-raleway font-semibold'>
										<span className='font-extrabold text-darkBlue text-2xl'>
											T
										</span>
										erabit Supply
									</span>
								</Link>
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
							<Popover className='hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center'>
								<Popover.Button
									onClick={toggleWishlist}
									type='button'
									className='relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none '
								>
									<span className='absolute -inset-1.5' />
									<span className='sr-only'>Wishlist</span>
									<HeartIcon className='h-6 w-6' aria-hidden='true' />
									{isWishlistOpen && <Wishlist />}
								</Popover.Button>
								<Cart
									isCartOpen={isCartOpen}
									toggleCart={toggleCart}
									cartItemsCount={cartItemsCount}
								/>
							</Popover>
						</div>
						<nav
							className='hidden lg:flex lg:justify-center lg:space-x-8 lg:py-2'
							aria-label='Global'
						>
							{navigation.map((item) =>
								isHomePage ? (
									<ScrollLink
										key={item.name}
										to={item.href}
										smooth={true}
										offset={-120}
										className={`${
											activeLink === item.href
												? 'bg-gray-200 text-gray-900'
												: 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'
										}
									inline-flex items-center rounded-md py-2 px-3 text-sm font-medium cursor-pointer`}
										aria-current={activeLink === item.href ? 'page' : undefined}
										onClick={() => setActiveLink(item.href)}
									>
										{item.name}
									</ScrollLink>
								) : (
									<Link href={'/'} passHref legacyBehavior>
										<a
											className={`${
												router.asPath === item.href
													? 'bg-gray-200 text-gray-900'
													: 'text-gray-900 hover:bg-gray-100 hover:text-gray-900'
											} inline-flex items-center rounded-md py-2 px-3 text-sm font-medium cursor-pointer`}
											aria-current={
												router.asPath === item.href ? 'page' : undefined
											}
										>
											{item.name}
										</a>
									</Link>
								)
							)}
						</nav>
					</div>

					<Disclosure.Panel as='nav' className='lg:hidden' aria-label='Global'>
						<div className='space-y-1 px-2 pb-3 pt-2'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									onClick={() => {
										if (isHomePage) {
											handleScroll(item.href);
										} else {
											router.push('/#' + item.href);
										}
									}}
									className={`${
										activeLink === item.href
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-900 hover:bg-gray-50 hover:text-gray-900'
									} block rounded-md py-2 px-3 text-base font-medium`}
									aria-current={activeLink === item.href ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className='border-t border-gray-200 pb-3 pt-4'>
							<div className='flex items-center px-4'>
								<button
									onClick={toggleWishlist}
									type='button'
									className='relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500'
								>
									<span className='absolute -inset-1.5' />
									<span className='sr-only'>Wishlist</span>
									<HeartIcon className='h-6 w-6' aria-hidden='true' />
								</button>
								<div className='ml-4 flow-root lg:ml-8'>
									<a href='#' className='group -m-2 flex items-center p-2'>
										<ShoppingBagIcon
											onClick={toggleCart}
											className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
										<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
											{cartItemsCount}
										</span>
										<span className='sr-only'>items in cart, view bag</span>
									</a>
									{isCartOpen && <Cart />}
									{isWishlistOpen && <Wishlist />}
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
