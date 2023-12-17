'use client';
import { Disclosure } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon, HeartIcon } from '@heroicons/react/24/outline';
import { useState, useRef } from 'react';
import Cart from './Cart';
import Wishlist from './Wishlist';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router';
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
		<Disclosure
			as='header'
			className='sticky top-0 z-[70] header-underline bg-white'
		>
			{({ open }) => (
				<>
					<div className='flex items-center justify-between p-2 max-w-8xl mx-auto'>
						<div className='flex justify-center text-3xl'>
							<Link href='/' className='-m-1.5 p-1.5'>
								<h2 className='font-bakilda text-2xl font-raleway font-bold text-center text-myPink'>
									Terrabit<span className='text-myOrange'>Supply</span>
								</h2>
							</Link>
						</div>
						<nav
							className='hidden lg:flex lg:gap-x-4 xl:gap-x-8 lg:ml-12'
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
												? 'text-myPink underline underline-offset-4'
												: 'text-myGray  hover:text-myPink'
										}
                                    text-sm font-semibold leading-6 text-black font-openSans  ease-in-out duration-300 transition cursor-pointer`}
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
													? 'text-myPink underline underline-offset-4'
													: 'text-myGray  hover:text-myPink'
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

						<div className='relative z-10 flex items-center lg:hidden'>
							<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none '>
								<span className='absolute -inset-0.5' />
								<span className='sr-only'>Open menu</span>
								{open ? (
									<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
								) : (
									<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
								)}
							</Disclosure.Button>
						</div>
						<Popover className='hidden lg:flex text-black lg:items-center font-openSans relative'>
							<div className='flex items-center w-36'>
								<div className='w-36 flex'>
									<div className='w-36 flex'>
										<a className='text-sm font-semibold p-1 leading-6 text-black hover:text-myOrange ease-in-out duration-300 transition flex items-center gap-x-2 cursor-pointer'>
											<MagnifyingGlassIcon className='h-5 w-5' />
										</a>
										<input
											type='text'
											placeholder='Search...'
											className='transition-width duration-300 ease-in-out block w-36 rounded-md border-0 bg-primary py-0.5 pl-1 pr-3 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset outline-none focus:ring-myPink sm:text-sm sm:leading-6'
											onClick={(e) => e.stopPropagation()}
											value={searchTerm}
											onChange={handleSearchChange}
										/>
									</div>
									{searchTerm && (
										<div className='absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg w-96 z-10'>
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
