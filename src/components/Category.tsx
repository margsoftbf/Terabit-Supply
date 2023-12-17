import Link from 'next/link';
import { categoriesData } from '../data/data';

const Category = () => {
	return (
		<div
			className='text-center mt-12 max-w-8xl mx-auto bg-white '
			id='categories'
		>
			<h2 className='text-2xl tracking-tight font-bold sm:text-3xl my-4 font-raleway text-myGray'>
				Shop by Category
			</h2>
			<div className='mt-8 grid grid-cols-2 md:grid-cols-4 2xl:grid-cols-8 gap-x-4 gap-y-8 sm:gap-x-4 m-4 justify-items-center'>
				{categoriesData.map((category) => (
					<Link
						className='w-40 h-44 sm:w-60 md:w-40 lg:w-60 2xl:w-40 flex flex-col rounded-lg  text-center shadow hover:bg-myOrange  transition duration-300 ease-in-out bg-myYellowLight items-center border-dashed border-2 border-myOrange cursor-pointer justify-center'
						key={category.id}
						href={`/category/${category.id}`}
					>
						<div className='flex flex-col'>
							<div className='rounded-full bg-white p-4'>
								<img
									src={category.imageUrl}
									className='mx-auto h-16 w-16 flex-shrink-0'
									alt=''
								/>
							</div>{' '}
							<h3 className='mt-4 text-md font-medium text-gray-900'>
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
