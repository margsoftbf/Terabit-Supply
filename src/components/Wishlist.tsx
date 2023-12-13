import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WishlistState } from '../types/types';
import { Popover } from '@headlessui/react';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { removeFromWishlist } from '@/store/wishlistSlice';
import { productsData } from '../data/data';

interface WishListProps {
	isWishlistOpen: boolean;
	toggleWishlist: () => void;
}

const Wishlist = ({ isWishlistOpen, toggleWishlist }: WishListProps) => {
	const dispatch = useDispatch();
	const wishlistItems = useSelector(
		(state: { wishlist: WishlistState }) => state.wishlist.items
	);

	const handleRemoveItemClick = (productId: string) => {
		dispatch(removeFromWishlist({ id: productId }));
	};

	return (
		<div>
			<Popover className='ml-4 flow-root text-sm lg:relative lg:ml-8'>
				<Popover.Button
					onClick={toggleWishlist}
					className='flex items-center p-2 text-gray-400 hover:text-gray-500'
				>
					<HeartIcon className='h-6 w-6' aria-hidden='true' />
					<span className='ml-2 text-black font-semibold'>Wishlist</span>
				</Popover.Button>

				{isWishlistOpen && (
					<div className='absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 border-2 m-4 rounded-md lg:border-none'>
						<XMarkIcon
							className='h-5 w-5 right-2 top-2 absolute cursor-pointer'
							onClick={toggleWishlist}
						/>
						<div className='mt-8 divide-y divide-gray-200'>
							{wishlistItems.length === 0 ? (
								<p className='text-center font-semibold text-base'>
									Your wishlist is empty.
								</p>
							) : (
								wishlistItems.map((item) => (
									<li
										key={item.id}
										className='flex items-center space-x-4 py-4'
									>
										<img
											src={
												productsData.find((product) => product.id === item.id)
													?.img || ''
											}
											alt={
												productsData.find((product) => product.id === item.id)
													?.imgAlt || ''
											}
											className='h-16 w-16 rounded-md border border-gray-200'
										/>
										<p className='flex-grow'>{item.name}</p>
										<button
											onClick={() => handleRemoveItemClick(item.id)}
											className='text-red-600 hover:text-red-800'
										>
											Remove
										</button>
									</li>
								))
							)}
						</div>
					</div>
				)}
			</Popover>
		</div>
	);
};

export default Wishlist;
