'use client';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import logo from '../../public/assets/logo.webp';
import { useState, useRef } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { navigation, productsData } from '../data/data';
import { CartItem } from '../types/types';
import { Popover } from '@headlessui/react';

interface CartState {
	items: Record<string, CartItem>;
}

const Navbar = () => {
	const [isCartOpen, setCartOpen] = useState(false);
	const [isWishlistOpen, setWishlistOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const searchInputRef = useRef<HTMLInputElement>(null);
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

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const filteredProducts = productsData.filter((product) =>
		product.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const handleLinkClick = () => {
		setSearchTerm('');
		if (searchInputRef.current) {
			searchInputRef.current.blur();
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
											value={searchTerm}
											onChange={handleSearchChange}
										/>
									</div>
									{searchTerm && (
										<div className='absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-full z-10'>
											{filteredProducts.map((product) => (
												<Link
													href={`/product/${product.id}`}
													key={product.id}
													className='block px-4 py-2 hover:bg-gray-100'
													onClick={handleLinkClick}
												>
													{product.name} - {product.price}
												</Link>
											))}
										</div>
									)}
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
								<Wishlist
									isWishlistOpen={isWishlistOpen}
									toggleWishlist={toggleWishlist}
								/>
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
									<Link key={item.name} href={'/'} passHref legacyBehavior>
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
							<Popover className='flex justify-end items-center px-4'>
								<Wishlist
									isWishlistOpen={isWishlistOpen}
									toggleWishlist={toggleWishlist}
								/>
								<Cart
									isCartOpen={isCartOpen}
									toggleCart={toggleCart}
									cartItemsCount={cartItemsCount}
								/>
							</Popover>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;
