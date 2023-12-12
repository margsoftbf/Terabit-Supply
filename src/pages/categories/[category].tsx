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

	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;
	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(
		indexOfFirstProduct,
		indexOfLastProduct
	);
	const pageCount = Math.ceil(products.length / productsPerPage);
	const pageNumbers = [];
	for (let i = 1; i <= pageCount; i++) {
		pageNumbers.push(i);
	}
	return (
		<div className='mx-auto max-w-8xl overflow-hidden sm:px-6 lg:px-8'>
			<div className='flex items-center justify-between my-4 mx-2'>
				<button
					onClick={() => router.back()}
					type='button'
					className='inline-flex items-center gap-x-1.5 rounded-md bg-darkBlue px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-ownBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkBlue'
				>
					<ArrowLeftIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
					Back
				</button>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					{categoryName}
				</h2>
			</div>
			<div className='-mx-px gap-2 grid grid-cols-1 sm:grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4'>
				{currentProducts.map((product) => (
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
			<div className='mx-auto mt-6 m-2 flex max-w-7xl justify-between px-4 text-sm font-medium text-gray-700 sm:px-6 lg:px-8 h-full'>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-darkBlue focus:outline-none '
				>
					Previous
				</button>
				<div className='hidden space-x-2 sm:flex'>
					{pageNumbers.map((number) => (
						<button
							className={`inline-flex h-10 text-base items-center rounded-md border px-4 ${
								number === currentPage
									? 'border-darkBlue bg-darkBlue text-white'
									: 'border-gray-300 bg-white'
							} ring-1 ring-darkBlue hover:bg-gray-100 focus:border-darkBlue focus:outline-none focus:ring-2 focus:ring-darkBlue focus:ring-opacity-25 focus:ring-offset-1 focus:ring-offset-darkBlue`}
							key={number}
							onClick={() => setCurrentPage(number)}
						>
							{number}
						</button>
					))}
				</div>
				<button
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === pageCount}
					className='inline-flex h-10 items-center rounded-md border border-gray-300 bg-white px-4 hover:bg-gray-100 focus:border-darkBlue focus:outline-none'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default CategoryPage;
