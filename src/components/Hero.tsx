'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import { heroData } from '../data/data';
import Image from 'next/image';
const Hero = () => {
	return (
		<div className='m-2 2xl:m-0' id='/'>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				speed={1000}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Autoplay, Pagination]}
				className='mx-auto max-w-8xl h-[500px] px-2 sm:px-4 lg:px-8 relative mt-2 rounded-md'
			>
				{heroData.map((hero) => (
					<SwiperSlide key={hero.id}>
				
						<img
							src={hero.src}
							alt={hero.alt}
							className='absolute inset-0 z-10 h-full w-full object-cover'
							loading='lazy'
						/>

						<div className='absolute w-full h-full bg-black/50 left-0 z-10'></div>
						<div className='absolute inset-0 z-20 flex flex-col justify-center items-start text-white ml-4 md:items-center lg:ml-0'>
							<p className='text-lg font-raleway font-semibold'>{hero.title}</p>
							<h2 className='text-xl lg:text-2xl font-bold mt-4'>
								{hero.subtitle}
							</h2>
							<p className='text-lg mt-4 font-semibold'>{hero.price}</p>
							<button
								type='button'
								className='mt-4 rounded-md bg-darkBlue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ownBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkBlue transition duration-300 ease-in-out'
							>
								{hero.btn}
							</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Hero;
