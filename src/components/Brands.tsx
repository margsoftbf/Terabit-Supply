import { brands } from '@/data/data';

const Brands = () => {
	return (
		<div className='mx-auto flex flex-col px-4 py-6 sm:px-6 lg:max-w-8xl'>
			<div className='flex items-center justify-between relative'>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					Brands
				</h2>
				<div className='absolute border-b border-2 w-full -bottom-2'></div>
			</div>
			<div className=' mt-12 mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
				{brands.map((brand) => (
					<img
						key={brand.id}
						className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
						src={brand.img}
						alt={brand.imgAlt}
						width={158}
						height={48}
					/>
				))}
			</div>
		</div>
	);
};

export default Brands;
