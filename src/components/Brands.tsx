import { brands } from '@/data/data';
import Image from 'next/image';

const Brands = () => {
	return (
		<div className='mx-auto flex flex-col px-4 sm:px-6 lg:max-w-8xl'>
			<div className='flex items-center justify-between relative'>
				<h2 className='text-2xl font-bold tracking-tight text-gray-900'>
					Brands
				</h2>
				<div className='absolute border-b border-2 w-full -bottom-2'></div>
			</div>
			<div className='mt-12 mx-auto grid max-w-lg items-center gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'>
				{brands.map((brand) => (
					<Image
						key={brand.id}
						src={brand.img}
						alt={brand.imgAlt}
						width={158}
						height={48}
						layout='responsive'
						className='col-span-1 max-h-12 w-full object-contain '
					/>
				))}
			</div>
		</div>
	);
};

export default Brands;
