import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { productsData } from '@/data/data';

const Popular = () => {
	const trendingProducts = productsData.filter((product) => product.isTrending);

	return (
		<div id='popular' className='bg-gray-100 my-8'>
			<div className='mx-auto flex flex-col px-4 py-12 sm:px-6 lg:max-w-8xl'>
				<div className='flex items-center justify-between relative'>
					<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
						Trending products
					</h2>
					<div className='absolute border-b border-2 w-full -bottom-2'></div>
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
								slidesPerView: 5,
							},
						}}
						className='w-full'
					>
						{trendingProducts.map((product) => (
							<SwiperSlide key={product.id} className='relative'>
								<div className='ml-2 h-40 w-56 overflow-hidden rounded-md bg-gray-200 border'>
									<img
										src={product.img}
										alt={product.name}
										className='h-full w-full object-contain object-center bg-white'
									/>
								</div>
								<h3 className='mt-4 font-semibold text-sm text-gray-700'>
									<a href={`/product/${product.id}`}>
										<span className='absolute inset-0' />
										{product.name}
									</a>
								</h3>
								<p className='mt-1 my-2 text-xs text-gray-500'>
									{product.categoryName}
								</p>
								<p className='mt-1 text-sm font-medium text-gray-900'>
									${product.price}
								</p>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Popular;
