'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { productsData } from '@/data/data';
import { StarIcon } from '@heroicons/react/24/solid';

const Popular = () => {
	const trendingProducts = productsData.filter((product) => product.isTrending);

	return (
		<div id='popular' className='bg-gray-100 my-8'>
			<div className='mx-auto flex flex-col px-4 py-4 sm:px-6 lg:max-w-8xl'>
				<div className='flex items-center justify-between relative'>
					<h2 className='text-2xl tracking-tight font-bold sm:text-3xl my-2 font-raleway text-myGray underline-custom'>
						Trending products
					</h2>
				</div>

				<div className='mt-6 gap-x-4 gap-y-10 sm:gap-x-6  md:gap-y-0 lg:gap-x-8'>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						pagination={{ clickable: true }}
						speed={1000}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
						}}
						loop={true}
						grabCursor={true}
						modules={[Autoplay]}
						breakpoints={{
							500: {
								slidesPerView: 2,
							},
							750: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 4,
							},
							1280: {
								slidesPerView: 6,
							},
						}}
						className='w-full'
					>
						{trendingProducts.map((product) => (
							<SwiperSlide
								key={product.id}
								className='h-72 flex flex-col justify-center rounded-lg  text-center hover:brightness-90 transition duration-300 ease-in-out bg-myYellowLight  items-center border-dashed border-2 border-myOrange cursor-pointer p-2 relative overflow-hidden'
							>
								<div className='h-60 flex flex-col justify-center relative'>
									<div className='w-32 absolute -top-2 left-6 text-center transform -translate-x-1/2 translate-y-1/2 bg-myPink text-white py-1 px-4 font-bold -rotate-45'>
										Popular
									</div>
									<div className='h-32 w-full flex items-center justify-center overflow-hidden'>
										<img
											src={product.img}
											alt={product.name}
											className='h-28 w-36 object-contain object-center bg-white rounded-md'
										/>
									</div>
									<h3 className='mt-4 font-semibold text-sm text-gray-700'>
										<a href={`/product/${product.id}`}>
											<span className='absolute inset-0' />
											{product.name.length > 15
												? `${product.name.slice(0, 15)}...`
												: product.name}
										</a>
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
									</div>
									<p
										className={`mt-2 my-2 text-xs font-bold ${
											product.inStock ? 'text-green-600' : 'text-red-600'
										}`}
									>
										{product.inStock ? 'In Stock' : 'Out of Stock'}
									</p>
									<p className='text-sm font-medium text-gray-900'>
										${product.price}
									</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Popular;
