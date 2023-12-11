import Link from 'next/link';
import { categoriesData } from '../data/data';

const Category = () => {
	return (
		<div
			className='text-center mt-8 max-w-6xl m-auto'
			id='categories'
		>
			<h2 className='text-xl font-medium tracking-tight text-gray-900 sm:text-3xl my-4 font-montserrat'>
				Shop by Category
			</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-16 lg:grid-cols-4 m-2 justify-items-center'>
				{categoriesData.map((category) => (
					<Link
						className='w-64 flex flex-col rounded-lg bg-white text-center border shadow hover:bg-ownGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition duration-300 ease-in-out'
						key={category.id}
						href={`/categories/${category.id}`}
					>
						<div className='flex flex-1 flex-col p-8'>
							<img
								src={category.imageUrl}
								className='mx-auto h-32 w-32 flex-shrink-0'
								alt=''
							/>
							<h3 className='mt-6 text-md font-medium text-gray-900'>
								{category.name}
							</h3>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Category;
