'use client';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { productsData } from '../data/data';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const imageStyle: React.CSSProperties = {
	borderRadius: '0.75rem',
	transform: 'rotate(-10deg)',
	transformOrigin: 'bottom left',
	objectFit: 'cover',
};
const imageStyle2: React.CSSProperties = {
	borderRadius: '0.75rem',
	transform: 'rotate(5deg)',
	transformOrigin: 'bottom left',
	objectFit: 'cover',
};

const Hero2 = () => {
	const product = productsData.find((p) => p.id === '3');
	const product2 = productsData.find((p) => p.id === '43');

	return (
		<div
			id='/'
			className='relative isolate flex flex-col gap-8 lg:flex-row pt-8 lg:pt-20 max-w-8xl mx-auto bg-white p-4'
		>
			<div className='w-full lg:w-1/2 relative'>
				<h1 className='font-montserrat text-3xl font-bold lg:text-6xl'>
					Let your <span className='text-myPink'>pc parts</span> come to you
				</h1>
				<p className='my-4 text-myGray lg:text-lg lg:pr-12'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste facilis
					possimus similique? Eos, perspiciatis distinctio. Nam praesentium
					obcaecati quam magni.
				</p>
				<div className='flex flex-col lg:flex-row lg:gap-8'>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center'>
							<CheckCircleIcon className='w-6 h-6 text-myOrange' />
							<p className='ml-1 text-xs lg:text-base font-montserrat font-light tracking-wide'>
								Everyday restocks
							</p>
						</div>
						<div className='flex items-center'>
							<CheckCircleIcon className='w-6 h-6 text-myOrange' />
							<p className='ml-1 text-xs lg:text-base font-montserrat font-light tracking-wide'>
								100% Guarantee
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<div className='flex items-center'>
							<CheckCircleIcon className='w-6 h-6 text-myOrange' />
							<p className='ml-1 text-xs lg:text-base   font-montserrat font-light tracking-wide'>
								Cash on Delivery
							</p>
						</div>
						<div className='flex items-center'>
							<CheckCircleIcon className='w-6 h-6 text-myOrange' />
							<p className='ml-1 text-xs  lg:text-base  font-montserrat font-light tracking-wide'>
								Fast Delivery
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='w-full lg:w-1/2 flex flex-col lg:flex-row relative'>
				<div className='w-full mx-auto lg:flex lg:justify-center lg:items-center'>
					<div className='w-64 h-80 lg:w-52 lg:h-72 relative rounded-3xl mx-auto mt-12'>
						<Image
							src='/assets/hero/gpu-small.webp'
							style={imageStyle}
							fill={true}
							quality={75}
							alt='GPU'
						/>
						<Image
							src='/assets/hero/procesor-small.webp'
							style={imageStyle2}
							fill={true}
							quality={75}
							alt='procesor'
						/>
					</div>
				</div>
				<div className='flex flex-row gap-2 items-center justify-center py-12'>
					{product && (
						<Link href={`/product/${product.id}`} passHref>
							<div className='bg-myYellowLight flex flex-col items-center border-dashed border-2 border-myOrange rounded-md w-36 md:w-48 lg:w-36 h-full p-4 cursor-pointer hover:bg-myOrange transition duration-300 ease-in-out relative overflow-hidden'>
								<div className='w-24 absolute -top-2 left-6 text-center transform -translate-x-1/2 translate-y-1/2 bg-red-500 text-white py-1 px-4 font-bold -rotate-45'>
									Deals
								</div>
								<img
									src={product.img}
									alt={product.imgAlt}
									className='rounded-md'
								/>
								<h2 className='mt-4 text-xs'>Intel Core i7</h2>
								<p className='text-green-700 font-bold font-montserrat mt-1'>
									${product.price}
								</p>
							</div>
						</Link>
					)}
					{product2 && (
						<Link href={`/product/${product2.id}`} passHref>
							<div className='bg-myYellowLight flex flex-col items-center border-dashed border-2 border-myOrange rounded-md w-36 h-full p-4  md:w-48 lg:w-36 cursor-pointer hover:bg-myOrange transition duration-300 ease-in-out relative overflow-hidden'>
								<div className='w-24 absolute -top-2 left-6 text-center transform -translate-x-1/2 translate-y-1/2 bg-red-500 text-white py-1 px-4 font-bold -rotate-45'>
									Deals
								</div>
								<img
									src={product2.img}
									alt={product2.imgAlt}
									className='rounded-md'
								/>
								<h2 className='mt-4 text-xs'>GeForce RTX 3060</h2>
								<p className='text-green-700 font-bold font-montserrat mt-1'>
									${product2.price}
								</p>
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero2;
