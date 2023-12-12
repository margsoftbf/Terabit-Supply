import { useDispatch, useSelector } from 'react-redux';
import { CartState } from '../types/types';
import { Fragment, useState } from 'react';
import { ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Popover, Transition } from '@headlessui/react';
import { productsData } from '../data/data';
import { removeFromCart, clearCart } from '@/store/cartSlice';

interface CartProps {
	isCartOpen: boolean;
	toggleCart: () => void;
	cartItemsCount: number;
}

const Cart = ({ isCartOpen, toggleCart, cartItemsCount }: CartProps) => {
	const [showNotification, setShowNotification] = useState(false);

	const dispatch = useDispatch();
	const cartItems = useSelector(
		(state: { cart: CartState }) => state.cart.items
	);

	const totalPrice = Object.values(cartItems).reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	const calculateItemPrice = (itemId: string) => {
		const product = productsData.find((product) => product.id === itemId);
		if (product) {
			return product.price;
		}
		return 0;
	};

	const handleRemoveItemClick = (productId: string) => {
		dispatch(removeFromCart({ id: productId }));
	};

	const handleCheckout = () => {
		setShowNotification(true);
		setTimeout(() => {
			setShowNotification(false);
		}, 3000);
		dispatch(clearCart());
		toggleCart();
	};

	return (
		<div>
			{showNotification && (
				<div
					className='fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded'
					role='alert'
				>
					<span className='block sm:inline'>
						Thank you for shopping with us!
					</span>
				</div>
			)}
			<Popover className='ml-4 flow-root text-sm lg:relative lg:ml-8'>
				<Popover.Button
					onClick={toggleCart}
					className='group -m-2 flex items-center p-2 outline-none focus:outline-none'
				>
					<ShoppingBagIcon
						className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500 outline-none focus:outline-none'
						aria-hidden='true'
					/>
					<span className='ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800'>
						{cartItemsCount}
					</span>
					<span className='sr-only'>items in cart, view bag</span>
				</Popover.Button>
				<Transition
					show={isCartOpen}
					as={Fragment}
					enter='transition ease-out duration-200'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='transition ease-in duration-150'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'
				>
					<div
						className={`${
							isCartOpen ? 'block' : 'hidden'
						} absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5 border-2 m-4 rounded-md lg:border-none`}
					>
						<XMarkIcon
							className='h-5 w-5 right-2 top-2 absolute cursor-pointer'
							onClick={toggleCart}
						/>
						<div className='mt-8 '>
							<div className='flow-root p-2 my-2'>
								<ul role='list' className='-my-6 divide-y divide-gray-200'>
									{cartItemsCount === 0 && (
										<div className='text-center font-semibold'>
											Your cart is empty.
										</div>
									)}
									{Object.values(cartItems).map((item) => (
										<li key={item.id} className='flex py-6'>
											<div className='h-16 w-16 flex-none rounded-md border border-gray-200'>
												<img
													src={
														productsData.find(
															(product) => product.id === item.id
														)?.img || ''
													}
													alt={
														productsData.find(
															(product) => product.id === item.id
														)?.imgAlt || ''
													}
													className='h-16 w-16 flex-none rounded-md border border-gray-200'
												/>
											</div>

											<div className='ml-4 flex flex-1 flex-col'>
												<div>
													<div className='flex justify-between text-base font-medium text-gray-900'>
														<h3 className='text-sm'>{item.name}</h3>
														<p className='ml-4 text-xs text-gray-500'>
															$
															{(
																calculateItemPrice(item.id) * item.quantity
															).toFixed(2)}
														</p>
													</div>
												</div>
												<div className='flex flex-1 items-end justify-between text-sm my-1'>
													<p className='text-gray-500'>Qty {item.quantity}</p>
													<div className='flex'>
														<button
															onClick={() => handleRemoveItemClick(item.id)}
															className='font-medium text-darkBlue hover:text-darkBlue'
														>
															Remove
														</button>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='border-t border-gray-200 px-4 pt-6 sm:px-6'>
							<div className='flex justify-between text-base font-medium text-gray-900'>
								<p>Subtotal</p>

								<p>${totalPrice.toFixed(2)}</p>
							</div>
							<p className='mt-0.5 text-sm text-gray-500'>
								Shipping and taxes calculated at checkout.
							</p>
							<div className='mt-6'>
								<button
									onClick={handleCheckout}
									className='w-full flex items-center justify-center rounded-md border border-transparent bg-darkBlue px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-ownBlue'
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</Transition>
			</Popover>
		</div>
	);
};

export default Cart;
