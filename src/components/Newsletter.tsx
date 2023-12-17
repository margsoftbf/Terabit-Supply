import React from 'react';

const Newsletter = () => {
	return (
		<div
			id='newsletter'
			className='bg-gray-100 py-16 mt-16 sm:py-24 lg:py-32 flex text-center'
		>
			<div className='mx-auto grid max-w-8xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8'>
				<div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7'>
					<h2 className='inline sm:block lg:inline xl:block'>
						Want product news and updates?
					</h2>{' '}
					<p className='inline sm:block lg:inline xl:block'>
						Sign up for our newsletter.
					</p>
				</div>
				<form className='w-full max-w-md lg:col-span-5 lg:pt-2 mx-auto'>
					<div className='flex gap-x-4'>
						<label htmlFor='email-address' className='sr-only'>
							Email address
						</label>
						<input
							id='email-address'
							name='email'
							type='email'
							autoComplete='email'
							required
							className='min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-myPink sm:text-sm sm:leading-6'
							placeholder='Enter your email'
						/>
						<button
							type='submit'
							className='flex-none rounded-md bg-myPink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-myPink/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ease-in-out transition duration-300'
						>
							Subscribe
						</button>
					</div>
					<p className='mt-4 text-sm leading-6 text-gray-900'>
						We care about your data. Read our{' '}
						<a
							href='#'
							className='font-semibold text-myOrange hover:text-myOrange/80 ease-in-out transition duration-300'
						>
							privacy&nbsp;policy
						</a>
						.
					</p>
				</form>
			</div>
		</div>
	);
};

export default Newsletter;
