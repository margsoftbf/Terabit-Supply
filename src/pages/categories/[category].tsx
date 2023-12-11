import { productsData, categoriesData } from '../../data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StarIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { addToWishlist } from '../../store/wishlistSlice';
import { ProductProps } from '../../types/types';

const CategoryPage = () => {
	const [addedProductId, setAddedProductId] = useState<string | null>(null);
	const [addedProductIdWishlist, setAddedProductIdWishlist] = useState<
		string | null
	>(null);

	const router = useRouter();
	const { category } = router.query;
	const categoryObject = categoriesData.find((cat) => cat.id === category);
	const categoryName = categoryObject ? categoryObject.name : 'Wrong category';

	const products = productsData.filter(
		(product) => product.categoryId === category
	);

	const dispatch = useDispatch();

	const handleAddToCart = (product: ProductProps) => {
		dispatch(addToCart(product));
		setAddedProductId(product.id);
		setTimeout(() => setAddedProductId(null), 3000);
	};

	const handleAddToWishlist = (product: ProductProps) => {
		dispatch(addToWishlist(product));
		setAddedProductIdWishlist(product.id);
		setTimeout(() => setAddedProductIdWishlist(null), 3000);
	};

	return (
		<div
			className='mx-auto max-w-8xl overflow-hidden sm:px-6 lg:px-8'
		>
			<div className='md:flex md:items-center md:justify-between my-4'>
				<button
					onClick={() => router.back()}
					className='flex flex-row  items-center font-medium text-darkBlue hover:text-ownBlue'
				>
					<ArrowLeftIcon className='h-6 w-6' />
					<span className='text-md'>Back</span>
				</button>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					{categoryName}
				</h2>
			</div>
			<div className='-mx-px gap-2 grid grid-cols-1 sm:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
				{products.map((product) => (
					<div
						key={product.id}
						className='group relative border border-gray-200 p-4 sm:p-6 rounded-md shadow m-2'
					>
						<Link href={`/product/${product.id}`}>
							<div className='flex items-center  justify-center overflow-hidden rounded-lg group-hover:opacity-75'>
								<img
									src={product.img}
									alt={product.imgAlt}
									className='h-36 w-36 object-cover object-center'
								/>
							</div>
							<div className='pb-4 pt-4 text-center'>
								<h3 className='text-md font-medium text-gray-900'>
									<span aria-hidden='true' className='absolute inset-0' />
									{product.name}
								</h3>
								<div className='mt-3 flex flex-col items-center'>
									<p className='sr-only'>{product.id} out of 5 stars</p>
									<div className='flex items-center'>
										{[0, 1, 2, 3, 4].map((rating) => (
											<StarIcon
												key={rating}
												className={`${
													product.rating > rating
														? 'text-yellow-400'
														: 'text-gray-200'
												}
												'h-5 w-5 flex-shrink-0'
											`}
												aria-hidden='true'
											/>
										))}
									</div>
									<p className='mt-1 text-sm text-gray-500'>
										{product.reviewCount} reviews
									</p>
								</div>
								<p className='mt-2 text-base font-medium text-gray-900'>
									${product.price}
								</p>
							</div>
						</Link>
						<div className='flex flex-col gap-2'>
							<button
								onClick={() => handleAddToCart(product)}
								className='relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 w-full px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
							>
								Add to cart<span className='sr-only'>, {product.name}</span>
							</button>
							<button
								onClick={() => handleAddToWishlist(product)}
								className='relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 w-full px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200'
							>
								Add to wishlist<span className='sr-only'>, {product.name}</span>
							</button>
						</div>
						{addedProductId === product.id && (
							<div className='absolute top-2 left-2 right-2 rounded-md flex items-center justify-center bg-green-500 text-white text-sm py-2'>
								Added to cart
							</div>
						)}
						{addedProductIdWishlist === product.id && (
							<div className='absolute top-2 left-2 right-2 rounded-md flex items-center justify-center bg-red-500 text-white text-sm py-2'>
								Added to wishlist
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
