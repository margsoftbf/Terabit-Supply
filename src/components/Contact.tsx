const Contact = () => {
	return (
		<div id='contact' className='bg-gray-100 my-8'>
			<div className='mx-auto flex flex-col px-4 py-12 sm:px-6 lg:max-w-8xl'>
				<div className='isolate w-full'>
					<div className='mx-auto max-w-2xl text-center'>
						<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							Contact
						</h2>
						<p className='mt-2 text-lg leading-8 text-gray-600'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
						</p>
					</div>
					<form
						action='#'
						method='POST'
						className='mx-auto mt-8 max-w-6xl sm:mt-12'
					>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='first-name'
										id='first-name'
										autoComplete='given-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myPink sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='last-name'
										id='last-name'
										autoComplete='family-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myPink sm:text-sm sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myPink sm:text-sm sm:leading-6'
									/>
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-gray-900'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										name='message'
										id='message'
										rows={4}
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myPink sm:text-sm sm:leading-6'
										defaultValue={''}
									/>
								</div>
							</div>
						</div>
						<div className='mt-10 flex items-center justify-end'>
							<button
								type='submit'
								className='block w-72 rounded-md bg-myPink px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-myPink/80 transition ease-in-out duration-300'
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
