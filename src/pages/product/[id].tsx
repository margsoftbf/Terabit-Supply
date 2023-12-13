import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { useState } from 'react';
import { ArrowLeftIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { CheckIcon, StarIcon } from '@heroicons/react/20/solid';
import { policies, reviewsProduct, productsData } from '../../data/data';
import { addToWishlist } from '@/store/wishlistSlice';

const Id = () => {
	const router = useRouter();
	const { id } = router.query;

	const product = productsData.find((p) => p.id === id);

	if (!product) {
		return <div>No found !</div>;
	}

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};
	const handleAddToWishlist = () => {
		dispatch(addToWishlist(product));
	};

	const [warranty, setWarranty] = useState<'Yes' | 'No'>('Yes');

	return (
		<div className='mx-auto max-w-8xl overflow-hidden sm:px-6 lg:px-8'>
			<div className='bg-gray-50'>
				<header className='relative bg-white px-4'>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							<button
								onClick={() => router.back()}
								type='button'
								className='inline-flex items-center gap-x-1.5 rounded-md bg-darkBlue px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-ownBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkBlue'
							>
								<ArrowLeftIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
								Back
							</button>

							<div className='ml-auto flex items-center'>
								<div className='flex'>
									<a
										href='#'
										className='flex items-center text-gray-700 hover:text-gray-800'
									>
										<img
											src='https://tailwindui.com/img/flags/flag-united-states.svg'
											alt=''
											className='block h-auto w-5 flex-shrink-0'
										/>
										<span className='ml-3 block text-sm font-medium'>USD</span>
										<span className='sr-only'>, change currency</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</header>

				<main>
					<div className='bg-white'>
						<div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6  lg:grid lg:max-w-8xl lg:grid-cols-2 lg:gap-x-8'>
							<div className='lg:max-w-lg lg:self-end'>
								<div role='list' className='flex items-center space-x-2'>
									<p className='font-medium text-gray-500 hover:text-gray-900'>
										{product.categoryName}
									</p>
								</div>

								<div className='mt-4'>
									<h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
										{product.name}
									</h1>
								</div>

								<section aria-labelledby='information-heading' className='mt-4'>
									<h2 id='information-heading' className='sr-only'>
										Product information
									</h2>

									<div className='flex items-center'>
										<p className='text-lg text-gray-900 sm:text-xl'>
											${product.price}
										</p>

										<div className='ml-4 border-l border-gray-300 pl-4'>
											<h2 className='sr-only'>Reviews</h2>
											<div className='flex items-center'>
												<div>
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
												</div>
												<p className='ml-2 text-sm text-gray-500'>
													{product.reviewCount} reviews
												</p>
											</div>
										</div>
									</div>

									<div className='mt-4 space-y-6'>
										<p className='text-base text-gray-500'>
											{product.description}
										</p>
									</div>

									<div className='mt-6 flex items-center'>
										<CheckIcon
											className='h-5 w-5 flex-shrink-0 text-green-500'
											aria-hidden='true'
										/>
										<p className='ml-2 text-sm text-gray-500'>
											In stock and ready to ship
										</p>
									</div>
								</section>
							</div>

							<div className='mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center'>
								<div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg'>
									<img
										src={product.imgBig}
										alt={product.imgAlt}
										className='h-full w-full object-cover object-center'
									/>
								</div>
							</div>

							<div className='mt-6 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start'>
								<div className='sm:flex flex-col sm:justify-between'>
									<div className='block text-base font-medium text-gray-700'>
										Warranty
									</div>
									<div className='mt-4 w-full grid grid-cols-1 gap-4 sm:grid-cols-2'>
										<button
											type='button'
											className={`relative block w-full cursor-pointer rounded-lg border p-1 focus:outline-none ${
												warranty === 'Yes'
													? 'bg-darkBlue text-white font-semibold'
													: 'border-gray-300'
											}`}
											onClick={() => setWarranty('Yes')}
										>
											Yes
										</button>
										<button
											type='button'
											className={`relative block w-full cursor-pointer rounded-lg border p-1 focus:outline-none ${
												warranty === 'No'
													? 'bg-darkBlue text-white font-semibold'
													: 'border-gray-300'
											}`}
											onClick={() => setWarranty('No')}
										>
											No
										</button>
									</div>
								</div>
								<div className='mt-10 flex flex-col gap-2'>
									<button
										onClick={handleAddToCart}
										type='button'
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-darkBlue px-8 py-3 text-base font-medium text-white hover:bg-ownBlue focus:outline-none transition-all duration-300 ease-in-out'
									>
										Add to cart
									</button>
									<button
										onClick={handleAddToWishlist}
										type='button'
										className='flex w-full items-center justify-center rounded-md border border-transparent bg-ownGray px-8 py-3 text-base font-medium text-white hover:bg-gray-700 focus:outline-none transition-all duration-300 ease-in-out'
									>
										Add to Wishlist
									</button>
								</div>
								<div className='mt-6 text-center'>
									<a
										href='#'
										className='group inline-flex text-base font-medium'
									>
										<ShieldCheckIcon
											className='mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
											aria-hidden='true'
										/>
										<span className='text-gray-500 hover:text-gray-700'>
											Lifetime Guarantee
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-8xl lg:px-8'>
						<section aria-labelledby='details-heading'>
							<div className='flex flex-col items-center text-center'>
								<h2
									id='details-heading'
									className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
								>
									Details
								</h2>
								<p className='mt-3 max-w-3xl text-lg text-gray-600'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
									laudantium doloribus provident, sapiente enim sit nisi autem
									sunt impedit! Quibusdam, facilis saepe illum pariatur dolorum
									velit ipsam accusantium odio sed!
								</p>
							</div>

							<div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
								<div>
									<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
										<img
											src={product.imgBig}
											alt={product.imgAlt}
											className='h-full w-full object-contain'
										/>
									</div>
									<p className='mt-8 text-base text-gray-500'>
										Lorem ipsum dolor sit, amet consectetur adipisicing elit.
										Explicabo numquam ratione dolor vitae sed natus ullam!
										Quaerat unde dicta facilis, quis, soluta consequuntur ullam,
										officiis qui omnis mollitia atque ad!
									</p>
								</div>
								<div>
									<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
										<img
											src={product.imgBig}
											alt={product.imgAlt}
											className='h-full w-full object-contain'
										/>
									</div>
									<p className='mt-8 text-base text-gray-500'>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit.
										Cum, amet. Iure itaque illo optio, nam ipsa, perferendis
										eveniet ullam hic at tempora fugiat quas totam. Velit
										nostrum obcaecati deserunt soluta?
									</p>
								</div>
							</div>
						</section>
						<section
							aria-labelledby='policy-heading'
							className='mt-16 lg:mt-24'
						>
							<h2 id='policy-heading' className='sr-only'>
								Our policies
							</h2>
							<div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8'>
								{policies.map((policy) => (
									<div key={policy.name}>
										<img src={policy.imageSrc} alt='' className='h-24 w-auto' />
										<h3 className='mt-6 text-base font-medium text-gray-900'>
											{policy.name}
										</h3>
										<p className='mt-3 text-base text-gray-500'>
											{policy.description}
										</p>
									</div>
								))}
							</div>
						</section>
					</div>

					<section aria-labelledby='reviews-heading' className='bg-white'>
						<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:grid lg:max-w-8xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32'>
							<div className='lg:col-span-4'>
								<h2
									id='reviews-heading'
									className='text-2xl font-bold tracking-tight text-gray-900'
								>
									Customer Reviews
								</h2>

								<div className='mt-3 flex items-center'>
									<div>
										<div className='flex items-center'>
											{[0, 1, 2, 3, 4].map((rating) => (
												<StarIcon
													key={rating}
													className={`${
														reviewsProduct.average > rating
															? 'text-yellow-400'
															: 'text-gray-300'
													}
														h-5 w-5 flex-shrink-0
													`}
													aria-hidden='true'
												/>
											))}
										</div>
										<p className='sr-only'>
											{reviewsProduct.average} out of 5 stars
										</p>
									</div>
									<p className='ml-2 text-sm text-gray-900'>
										Based on {reviewsProduct.totalCount} reviews
									</p>
								</div>

								<div className='mt-6'>
									<h3 className='sr-only'>Review data</h3>

									<dl className='space-y-3'>
										{reviewsProduct.counts.map((count) => (
											<div
												key={count.rating}
												className='flex items-center text-sm'
											>
												<dt className='flex flex-1 items-center'>
													<p className='w-3 font-medium text-gray-900'>
														{count.rating}
														<span className='sr-only'> star reviews</span>
													</p>
													<div
														aria-hidden='true'
														className='ml-1 flex flex-1 items-center'
													>
														<StarIcon
															className={`${
																count.count > 0
																	? 'text-yellow-400'
																	: 'text-gray-300'
															}
																h-5 w-5 flex-shrink-0
															`}
															aria-hidden='true'
														/>

														<div className='relative ml-3 flex-1'>
															<div className='h-3 rounded-full border border-gray-200 bg-gray-100' />
															{count.count > 0 ? (
																<div
																	className='absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400'
																	style={{
																		width: `calc(${count.count} / ${reviewsProduct.totalCount} * 100%)`,
																	}}
																/>
															) : null}
														</div>
													</div>
												</dt>
												<dd className='ml-3 w-10 text-right text-sm tabular-nums text-gray-900'>
													{Math.round(
														(count.count / reviewsProduct.totalCount) * 100
													)}
													%
												</dd>
											</div>
										))}
									</dl>
								</div>

								<div className='mt-10'>
									<h3 className='text-lg font-medium text-gray-900'>
										Share your thoughts
									</h3>
									<p className='mt-1 text-sm text-gray-600'>
										If you’ve used this product, share your thoughts with other
										customers
									</p>

									<a
										href='#'
										className='mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full'
									>
										Write a review
									</a>
								</div>
							</div>

							<div className='mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0'>
								<h3 className='sr-only'>Recent reviews</h3>

								<div className='flow-root'>
									<div className='-my-12 divide-y divide-gray-200'>
										{reviewsProduct.featured.map((review) => (
											<div key={review.id} className='py-12'>
												<div className='flex items-center'>
													<img
														src={review.avatarSrc}
														alt={`${review.author}.`}
														className='h-12 w-12 rounded-full'
													/>
													<div className='ml-4'>
														<h4 className='text-sm font-bold text-gray-900'>
															{review.author}
														</h4>
														<div className='mt-1 flex items-center'>
															{[0, 1, 2, 3, 4].map((rating) => (
																<StarIcon
																	key={rating}
																	className={`${
																		review.rating > rating
																			? 'text-yellow-400'
																			: 'text-gray-300'
																	}
																		h-5 w-5 flex-shrink-0
																	`}
																	aria-hidden='true'
																/>
															))}
														</div>
													</div>
												</div>

												<div
													className='mt-4 space-y-6 text-base italic text-gray-600'
													dangerouslySetInnerHTML={{ __html: review.content }}
												/>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Id;
