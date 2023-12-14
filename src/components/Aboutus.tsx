import { aboutUsCards } from '@/data/data';

const Aboutus = () => {
	return (
		<div id='aboutus' className='relative isolate overflow-hidden bg-gray-100 py-12'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'>
						About us
					</h2>
					<p className='mt-6 text-lg leading-8 text-black'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
						omnis ratione adipisci? Quae iste similique consequuntur incidunt
						praesentium nulla corrupti. Fugiat molestiae deserunt, repudiandae
						possimus aspernatur suscipit eius error sequi.
					</p>
				</div>
				<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8'>
					{aboutUsCards.map((card) => (
						<div
							key={card.name}
							className='flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 border-2 cursor-pointer hover:border-darkBlue hover:bg-white/10 transition'
						>
							<card.icon
								className='h-7 w-5 flex-none text-darkBlue'
								aria-hidden='true'
							/>
							<div className='text-base leading-7'>
								<h3 className='font-semibold text-black'>{card.name}</h3>
								<p className='mt-2 text-black'>{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
