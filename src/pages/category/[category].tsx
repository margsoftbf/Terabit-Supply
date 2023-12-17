import { productsData, categoriesData } from '../../data/data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StarIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useEffect, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { addToWishlist } from '../../store/wishlistSlice';
import { ProductProps } from '../../types/types';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

const CategoryPage = () => {
	const [addedProductId, setAddedProductId] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(8);
	const router = useRouter();
	const { category } = router.query;
	const categoryObject = categoriesData.find((cat) => cat.id === category);
	const categoryName = categoryObject ? categoryObject.name : 'Wrong category';
	const [addedProductIdWishlist, setAddedProductIdWishlist] = useState<
		string | null
	>(null);
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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1536) {
				setProductsPerPage(10);
			} else {
				setProductsPerPage(8);
			}
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);
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
		<div className='mx-auto max-w-8xl overflow-hidden'>

			<div className='my-8'>
				<div className='p-2 flex items-center justify-between '>
					<nav className='flex my-4 ' aria-label='Breadcrumb'>
						<ol role='list' className='flex items-center space-x-4'>
							<li>
								<div className='flex'>
									<Link
										href='/'
										className='text-base font-medium text-gray-500 hover:text-gray-700'
									>
										Category
									</Link>
								</div>
							</li>
							<li>
								<div className='flex items-center'>
									<ChevronRightIcon
										className='h-5 w-5 flex-shrink-0 text-gray-400'
										aria-hidden='true'
									/>
									<a
										href='#'
										className='ml-4 text-base font-medium text-gray-500 hover:text-gray-700'
									>
										{categoryName}
									</a>
								</div>
							</li>
						</ol>
					</nav>
					<div className='flex flex-shrink-0 md:ml-4 md:mt-0'>
						<button
							onClick={() => router.back()}
							type='button'
							className='inline-flex items-center gap-x-1.5 rounded-md bg-myOrange px-2.5 py-1.5 text-sm font-semibold font-raleway text-black shadow-sm hover:bg-myOrange/80'
						>
							<ArrowLeftIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
							Back
						</button>
					</div>
				</div>
			</div>
			<div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-2 -mx-px'>
				{currentProducts.map((product) => (
					<div
						key={product.id}
						className='h-96 group relative m-2 flex flex-col justify-center rounded-lg  text-center transition duration-300 ease-in-out bg-myYellowLight  items-center  cursor-pointer  overflow-hidden p-2'
					>
						<Link href={`/product/${product.id}`}>
							<div className='flex items-center relative justify-center overflow-hidden rounded-lg'>
								<img
									src={product.img}
									alt={product.imgAlt}
									className='h-32 w-40 object-contain object-center bg-white rounded-md'
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
										{' / '}
										<p className='mt-1 font-bold text-sm text-gray-500'>
											{product.reviewCount} reviews
										</p>
									</div>
								</div>
								<p className='mt-2 text-xl font-medium font-montserrat text-gray-900'>
									${product.price}
								</p>
							</div>
						</Link>

						<div className='flex flex-col w-48 gap-2 relative'>
							<button
								onClick={() => handleAddToCart(product)}
								className='relative flex items-center justify-center rounded-md border border-transparent bg-green-500 w-full py-2 text-sm font-medium text-white hover:bg-green-500/80'
							>
								Add to cart
							</button>
							<button
								onClick={() => handleAddToWishlist(product)}
								className='relative flex items-center justify-center rounded-md border border-transparent bg-myPink w-full py-2 text-sm font-medium text-white hover:bg-myPink/80'
							>
								Add to wishlist
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
			<div className='mx-auto mt-12 m-2 flex max-w-8xl justify-between px-4 text-sm font-medium text-gray-700 h-full'>
				<button
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
					className='inline-flex items-center gap-x-1.5 rounded-md bg-myOrange px-2.5 py-1.5 text-sm font-semibold font-raleway text-black shadow-sm hover:bg-myOrange/80'
				>
					Previous
				</button>
				<div className='space-x-2 flex'>
					{pageNumbers.map((number) => (
						<button
							className={`inline-flex h-10 text-base items-center rounded-md border px-4 ${
								number === currentPage
									? 'border-myOrange bg-myOrange text-black'
									: 'border-gray-300 bg-myOrange/20'
							} ring-1 ring-myPink hover:bg-myOrange/50 transition ease-in-out duration-150`}
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
					className='inline-flex items-center gap-x-1.5 rounded-md bg-myOrange px-2.5 py-1.5 text-sm font-semibold font-raleway text-black shadow-sm hover:bg-myOrange/80'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default CategoryPage;
