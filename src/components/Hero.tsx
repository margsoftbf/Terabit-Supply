'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import hero1 from '../../public/assets/hero/hero1.webp';
import hero2 from '../../public/assets/hero/hero2.webp';

const heroData = [
	{
		id: 1,
		src: hero1,
		alt: 'cpu picture',
		title: 'Choose your processor',
		subtitle: 'Intel - Core i9-13900K',
		price: '$543.33 or 55.55/mo. for 24 mo.',
		btn: 'Shop now',
	},
	{
		id: 2,
		src: hero2,
		alt: 'gpu picture',
		title: 'Choose your GPU',
		subtitle: 'NVIDIA - GeForce RTX 3090 Ti',
		price: '$1243.33 or 95.55/mo. for 24 mo.',
		btn: 'Shop now',
	},
];

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
							src={hero.src.src}
							alt={hero.alt}
							className='absolute inset-0 z-10 h-full w-full object-cover'
						/>
						<div className='absolute w-full h-full bg-black/50 left-0 z-10'></div>
						<div className='absolute inset-0 z-20 flex flex-col justify-center items-start text-white ml-4 md:items-center lg:ml-0'>
							<p className='text-lg font-raleway font-semibold'>{hero.title}</p>
							<h2 className='text-2xl font-bold mt-4'>{hero.subtitle}</h2>
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
